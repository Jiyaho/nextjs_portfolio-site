import ProjectCard from '@/components/atoms/ProjectCard';

async function Portfolio() {
  return (
    <section className="p-10 text-center items-center">
      <article className="m-auto mt-10 flex flex-row flex-wrap justify-center w-3/4">
        <ProjectCard />
      </article>
    </section>
  );
}

export default Portfolio;
