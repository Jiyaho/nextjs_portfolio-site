import matter from 'gray-matter';

interface MdxMetaData {
  title: string;
  description: string;
  // 여기에 필요한 다른 메타데이터 프로퍼티들을 추가 가능
}

export function getMdxMetaData(content: string): MdxMetaData {
  const { data } = matter(content);
  return data as MdxMetaData;
}
