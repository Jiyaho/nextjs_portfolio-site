'use client';

import { useState, useEffect } from 'react';
import TypeItGreeting from '@/components/atoms/TypeItGreeting';
import { GiClick } from 'react-icons/gi';
import Link from 'next/link';

export default function Home() {
  const [isIconVisible, setIsIconVisible] = useState(false);

  useEffect(() => {
    // 2초 후에 아이콘을 나타나도록 설정
    const timer = setTimeout(() => {
      setIsIconVisible(true);
    }, 2000);

    // 컴포넌트가 언마운트되면 타이머를 클리어
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 text-center">
      <div className="h-16 text-6xl font-extralight mt-40 mb-20 md:text-9xl">
        <TypeItGreeting />
      </div>
      <Link
        href="/introduce"
        className={`text-8xl flex justify-center hover:text-9xl ${
          isIconVisible
            ? 'opacity-100 transform translate-y-0 transition-all duration-1000 ease-in-out'
            : 'opacity-0 transform -translate-y-10'
        }`}
      >
        <GiClick />
      </Link>
    </section>
  );
}
