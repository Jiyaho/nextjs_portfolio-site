import { useState, useEffect, useRef } from 'react';
import { svgPathViewBoxes, svgPathDirectories } from '@/constants/SvgPathInfo';

const calcDashoffset = (scrollY: number, element: HTMLElement, length: number): number => {
  const ratio = (scrollY - element.offsetTop) / (element.offsetHeight - window.innerHeight);
  const value = length - length * ratio;
  return Math.max(0, Math.min(length, value));
};

const SvgPathDraw = () => {
  const firstSvgDir = svgPathDirectories.first;
  const firstSvgViewBox = svgPathViewBoxes.first;
  const lastSvgDir = svgPathDirectories.last;
  const lastSvgViewBox = svgPathViewBoxes.last;

  const lastDivRef = useRef<HTMLDivElement>(null);
  const lastPathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (lastDivRef.current && lastPathRef.current) {
      const length = lastPathRef.current.getTotalLength();
      setPathLength(length);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      if (lastDivRef.current && lastPathRef.current) {
        lastPathRef.current.style.strokeDashoffset = `${calcDashoffset(scrollY, lastDivRef.current, pathLength)}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathLength]);

  return (
    <>
      <div className="h-4/5 w-4/5">
        <svg viewBox={firstSvgViewBox} xmlns="http://www.w3.org/2000/svg">
          <path d={firstSvgDir} className="stroke-1 fill-none stroke-light-text-color dark:stroke-dark-text-color" />
        </svg>
      </div>
      {/* <div ref={lastDivRef} className="h-3/5 w-3/5">
        <svg viewBox={lastSvgViewBox} xmlns="http://www.w3.org/2000/svg">
          <path
            ref={lastPathRef}
            id="svg_path"
            d={lastSvgDir}
            strokeDasharray={`${pathLength}`}
            className="stroke-1 fill-none stroke-light-text-color dark:stroke-dark-text-color"
          />
        </svg>
      </div> */}
    </>
  );
};

export default SvgPathDraw;
