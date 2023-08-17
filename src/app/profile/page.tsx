import { allPosts } from '@/contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

function Profile() {
  // 포스팅 전체 목록에서 폴더 경로 'profile'인것 찾기
  const profile = allPosts.find(({ _raw }) => _raw.sourceFileDir === 'profile');

  // 글 없으면 반환할 내용
  if (!profile) notFound();

  // MDX 파일 body(글 내용 부분) 가져오기
  const MDXContent = useMDXComponent(profile?.body.code || '');

  return (
    <section className="py-10 mt-10">
      <article className="prose dark:prose-invert m-auto text-center">
        <MDXContent />
      </article>
    </section>
  );
}
export default Profile;
