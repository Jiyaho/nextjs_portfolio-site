import { allPosts } from '@/contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

function ProjectCard() {
  const projectsToDisplay = allPosts.filter(({ _raw }) => _raw.sourceFileDir === 'projects');

  if (!projectsToDisplay) {
    return <div>Project is not found</div>;
  }

  return (
    <>
      {projectsToDisplay.map((project) => (
        <Link key={project._id} href={`/portfolio/${project._raw.sourceFileName.replace('.mdx', '')}`}>
          <ul className="m-7">
            <li className="c_project-card">
              {project.thumbnail ? (
                <Image
                  src={project.thumbnail}
                  alt="thumbnail"
                  width={390}
                  height={200}
                  className="w-auto h-auto relative z-100"
                />
              ) : (
                'thumbnail'
              )}
            </li>
            <li className="mt-2 text-2xl">{project.title}</li>
            <li className="mb-10">{project.description}</li>
          </ul>
        </Link>
      ))}
    </>
  );
}
export default ProjectCard;
