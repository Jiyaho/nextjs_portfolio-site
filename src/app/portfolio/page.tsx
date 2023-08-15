import ProjectCard from '@/components/atoms/ProjectCard';

async function Portfolio() {
  return (
    <section className="p-10 text-center items-center">
      <article className="mt-5 flex flex-row flex-wrap justify-center">
        <ProjectCard />
      </article>
    </section>
  );
}

export default Portfolio;
