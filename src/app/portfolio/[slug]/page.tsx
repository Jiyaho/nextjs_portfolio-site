import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from '@/contentlayer/generated';
import { notFound } from 'next/navigation';

function ProjectDetailPage({ params: { slug } }: { params: { slug: string } }) {
  // 포스팅 전체 목록에서 'MDX파일명' = '페이지 slug' 같은 것 찾기
  const post = allPosts.find((post) => post._raw.sourceFileName.replace('.mdx', '') === slug);

  // 404 if the post does not exist.
  if (!post) notFound();

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code || '');

  return (
    <>
      <section className="p-5 md:p-10">
        <article className="prose dark:prose-invert m-auto">
          <MDXContent />
        </article>
      </section>
    </>
  );
}

export default ProjectDetailPage;
