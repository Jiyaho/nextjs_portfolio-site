import Image from 'next/image';
import Link from 'next/link';

function Introduce() {
  return (
    <article className="mt-16 flex-row gap-2 text-center justify-center md:flex md:text-left md:mt-40">
      <div className="">
        <h1 className="text-5xl font-bold">I’m Jiho Shin,</h1>
        <p className="text-2xl  mb-1 font-bold italic">you can also call me Janet.</p>
        <h2 className="text-3xl font-bold text-dark-point-color dark:text-light-point-color">
          Front-end Developer
        </h2>
        <div className="mt-2 mb-4 h-min text-md w-5/5">
          {/* <p>Crafting Digital Experiences with Code.</p>
          <p>Transforming Ideas into Digital Magic!</p>
          <p>Coding, Coffee, and Creativity...</p>
          <p>Exploring Possibilities, Writing Code Again!</p> */}
          <p>제가 프론트엔드 개발 직무에 있어 중요하게 생각하는 가치</p>
          <p>는 사용자 경험을 향상시키는 것입니다.</p>
          <br />
          <p>이를 통해 사용자가 웹 및 모바일 애플리케이션을 더 효과적</p>
          <p>으로 이용할 수 있으며, 사용자의 요구를 충족시킬 수 있을</p>
          <p>것입니다.</p>
          <br />
          <p>뿐만 아니라, 프론트엔드 개발자로서 사용자와 비즈니스 간</p>
          <p>의 다리 역할을 하여 사용자에게는 편리한 경험을 제공하고,</p>
          <p>해당 비즈니스에 새로운 기회를 열어주며, 더 나아가 사회적</p>
          <p>가치를 창출 하는 데 기여하고 싶습니다.</p>
        </div>
        <div className="border rounded-md w-28 text-center text-xl bg-dark-bg-color text-dark-text-color m-auto mb-5 md:m-0">
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
