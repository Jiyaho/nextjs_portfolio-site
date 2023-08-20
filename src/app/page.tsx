'use client';
import SvgPathDraw from '@/components/atoms/SvgPathDraw';
import TypeItGreeting from '@/components/atoms/TypeItGreeting';

export default function Home() {
  return (
    <section className="py-12 text-center">
      <div className="h-16 text-6xl font-extralight">
        <TypeItGreeting />
      </div>
      <div className="mt-12 h-min text-lg font-extralight">
        <p>Crafting Digital Experiences with Code.</p>
        <p>Transforming Ideas into Digital Magic!</p>
        <p>Coding, Coffee, and Creativity...</p>
        <p>Exploring Possibilities, Writing Code Again!</p>
      </div>
      <div className="flex justify-center flex-col items-center mt-12">
        <SvgPathDraw />
      </div>
    </section>
  );
}
