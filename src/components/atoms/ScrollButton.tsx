import { useEffect, useState } from 'react';

function ScrollButton() {
  const [toggleScrollBtn, setToggleScrollBtn] = useState(false);

  const handleScroll = () => {
    window.scrollY > 350 ? setToggleScrollBtn(true) : setToggleScrollBtn(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {toggleScrollBtn ? (
        <button onClick={scrollToTop} className="fixed text-3xl right-1/4 bottom-1/3 text-center">
          🔝
        </button>
      ) : null}
    </div>
  );
}

export default ScrollButton;
