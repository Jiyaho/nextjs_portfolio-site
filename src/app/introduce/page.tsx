import Image from 'next/image';
import Link from 'next/link';

function Introduce() {
  return (
    <article className="mt-16 flex-row text-center justify-center md:flex md:text-left md:mt-40">
      <div>
        <h1 className="text-5xl font-bold">I'm Shin Jiho,</h1>
        <p className="text-2xl  mb-1 font-bold italic">you can also call me Janet.</p>
        <h2 className="text-3xl font-bold text-dark-point-color dark:text-light-point-color">Front-end Developer</h2>
        <div className="mt-2 mb-4 h-min text-md">
          <p>Crafting Digital Experiences with Code.</p>
          <p>Transforming Ideas into Digital Magic!</p>
          <p>Coding, Coffee, and Creativity...</p>
          <p>Exploring Possibilities, Writing Code Again!</p>
        </div>
        <div className="border rounded-md w-28 text-center text-xl bg-dark-bg-color text-dark-text-color m-auto mb-5 md:m-0 ">
          <Link href="/about">About Me</Link>
        </div>
      </div>
      <Image
        className="w-48 h-48 m-auto md:m-0 md:w-72 md:h-72"
        src="/images/mypic_circle.png"
        alt="my_picture"
        width={280}
        height={280}
      />
    </article>
  );
}
export default Introduce;
