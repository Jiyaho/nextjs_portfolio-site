'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from '@/contentlayer/generated';
import { notFound } from 'next/navigation';
import ScrollButton from '@/components/atoms/ScrollButton';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

function ProjectDetailPage({ params: { slug } }: { params: { slug: string } }) {
  // 포스팅 전체 목록에서 'MDX파일명' = '페이지 slug' 같은 것 찾기
  const post = allPosts.find((post) => post._raw.sourceFileName.replace('.mdx', '') === slug);

  // 404 if the post does not exist.
  if (!post) notFound();

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code || '');

  // 다크모드 후 새로고침 시 테마 적용
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setIsDarkMode(currentTheme === 'dark' ? true : false);
  }, [currentTheme]);

  return (
    <section className="p-12">
      <ScrollButton />
      <article className={isDarkMode ? 'prose m-auto mt-2 c_dark-mode_post' : 'prose m-auto mt-2'}>
        <MDXContent />
      </article>
    </section>
  );
}

export default ProjectDetailPage;
