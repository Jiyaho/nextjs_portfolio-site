import ProjectCard from '@/components/atoms/ProjectCard';

async function Portfolio() {
  return (
    <section className="p-12 text-center items-center">
      <h1 className="text-4xl mb-2">Projects</h1>
      <hr />
      <article className="mt-4">
        <ProjectCard />
      </article>
    </section>
  );
}

export default Portfolio;
