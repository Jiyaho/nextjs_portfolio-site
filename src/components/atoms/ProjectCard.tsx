import { allPosts } from '@/contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

function ProjectCard() {
  const projectsToDisplay = allPosts.filter(({ _raw }) => _raw.sourceFileDir === 'projects');
  const sortProjectList = projectsToDisplay.reverse(); // 최신 프로젝트가 위로 가도록 목록 순서 뒤집기

  if (!projectsToDisplay) {
    return <div>Project is not found</div>;
  }

  return (
    <>
      {sortProjectList.map((project) => (
        <Link
          key={project._id}
          href={`/portfolio/${project._raw.sourceFileName.replace('.mdx', '')}`}
        >
          <ul className="m-10">
            <li className="c_project-card">
              {project.thumbnail ? (
                <div className="w-96 h-48 relative overflow-hidden rounded-lg">
                  <Image
                    src={project.thumbnail}
                    alt="thumbnail-image"
                    width={380}
                    height={270}
                    className="w-auto h-auto z-100 rounded-lg"
                  />
                </div>
              ) : (
                'thumbnail'
              )}
            </li>
            <li className="mt-2 text-2xl">{project.title}</li>
            <li className="mb-5">{project.description}</li>
          </ul>
        </Link>
      ))}
    </>
  );
}
export default ProjectCard;
