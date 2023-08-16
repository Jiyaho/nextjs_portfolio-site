import TypeItComponent from '@/components/atoms/TypeItComponent';

export default function Home() {
  return (
    <section className="py-32 text-center">
      <div className="text-5xl font-extralight">
        <div className="z-1 absolute h-full w-full">
          <TypeItComponent />
        </div>
      </div>
    </section>
  );
}
