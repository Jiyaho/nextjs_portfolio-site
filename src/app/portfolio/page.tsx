import ProjectCard from '@/components/atoms/ProjectCard';

async function Portfolio() {
  return (
    <section className="p-10 text-center items-center">
      <article className="m-auto flex flex-row flex-wrap justify-center w-4/5 ">
        <ProjectCard />
      </article>
    </section>
  );
}

export default Portfolio;
