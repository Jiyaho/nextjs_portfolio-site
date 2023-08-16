'use client';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import NavMenu from '../atoms/NavMenu';

function NavDropdown() {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <>
      <button className="c_nav-bar" onClick={handleMenuToggle}>
        {menuToggle ? <AiOutlineClose /> : <RxHamburgerMenu />}
      </button>
      {menuToggle ? (
        <div className="flex flex-col absolute w-fit bg-[rgba(0,0,0)] text-white">
          <NavMenu className="p-2 hover:bg-teal-500 dark:hover:bg-pink-800" />
        </div>
      ) : (
        ''
      )}
    </>
  );
}
export default NavDropdown;
