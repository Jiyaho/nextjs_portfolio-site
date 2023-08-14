'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from '@/contentlayer/generated';
import { notFound } from 'next/navigation';
import { useTheme } from 'next-themes';
import ScrollButton from '@/components/atoms/ScrollButton';

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

  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <section className="p-12">
      <ScrollButton />
      <article className={currentTheme === 'dark' ? 'prose m-auto mt-2 c_dark-mode_post' : 'prose m-auto  mt-2'}>
        <MDXContent />
      </article>
    </section>
  );
}

export default ProjectDetailPage;
