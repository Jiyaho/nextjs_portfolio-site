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
        <Link key={project._id} href={`/portfolio/${project._raw.sourceFileName.split('.mdx')[0]}`}>
          <ul>
            <li>
              {project.thumbnail ? (
                <Image className="m-auto" src={project.thumbnail} alt="thumbnail" width={300} height={200} />
              ) : (
                'thumbnail image'
              )}
            </li>
            <li className="text-2xl">{project._raw.sourceFileName.replace('.mdx', '')}</li>
            <li>{project.description}</li>
          </ul>
        </Link>
      ))}
    </>
  );
}
export default ProjectCard;
