import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from '@/contentlayer/generated';
import { notFound } from 'next/navigation';

// export async function generateStaticParams() {
//   return allPosts.map((post) => ({
//     slug: post._raw.sourceFileName.split('.mdx')[0],
//   }));
// }

function ProjectDetailPage({ params: { slug } }: { params: { slug: string } }) {
  // 포스팅 전체 목록에서 'MDX파일명' = '페이지 slug' 같은 것 찾기
  const post = allPosts.find((post) => post._raw.sourceFileName.replace('.mdx', '') === slug);

  // 404 if the post does not exist.
  if (!post) notFound();

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code || '');

  return (
    <section className="p-12 text-center">
      <h1 className="text-4xl mb-5">{post.title}</h1>
      <h2 className="text-xl mb-2">{post.category}</h2>
      <hr />
      <article className="prose mt-2 m-auto">
        <MDXContent />
      </article>
    </section>
  );
}

export default ProjectDetailPage;
