'use client';

import { allPosts } from '@/contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { useTheme } from 'next-themes';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

function Profile() {
  // 포스팅 전체 목록에서 폴더 경로 'profile'인것 찾기
  const profile = allPosts.find(({ _raw }) => _raw.sourceFileDir === 'profile');

  // 글 없으면 반환할 내용
  if (!profile) notFound();

  // MDX 파일 body(글 내용 부분) 가져오기
  const MDXContent = useMDXComponent(profile?.body.code || '');

  // 다크모드 후 새로고침 시 테마 적용
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setIsDarkMode(currentTheme === 'dark' ? true : false);
  }, [currentTheme]);

  return (
    <section className="py-10">
      <article className={isDarkMode ? 'prose m-auto text-center c_dark-mode_post' : 'prose m-auto text-center'}>
        <MDXContent />
      </article>
    </section>
  );
}
export default Profile;
