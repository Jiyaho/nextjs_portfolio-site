import TypeItGreeting from '@/components/atoms/TypeItGreeting';
import TypeItSlogans from '@/components/atoms/TypeItSlogans';

export default function Home() {
  return (
    <section className="py-32 text-center">
      {/* <div className="text-5xl font-extralight ">
        <TypeItGreeting />
      </div> */}
      <h1 className="text-5xl font-extralight">Hello world!</h1>
      <div className="mt-10 text-2xl font-extralight">
        <TypeItSlogans />
      </div>
    </section>
  );
}
