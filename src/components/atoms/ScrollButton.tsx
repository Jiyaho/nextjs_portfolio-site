import { useEffect, useState } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';

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
        <button onClick={scrollToTop} className="c_scroll-button">
          <BsArrowUpCircleFill />
        </button>
      ) : null}
    </div>
  );
}

export default ScrollButton;
