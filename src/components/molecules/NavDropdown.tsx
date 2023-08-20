'use client';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import NavMenu from '../atoms/NavMenu';

function NavDropdown() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <button className="c_nav-bar" onClick={() => setMenuToggle(!menuToggle)}>
        {menuToggle ? <AiOutlineClose /> : <RxHamburgerMenu />}
      </button>
      {menuToggle ? (
        <div onClick={() => setMenuToggle(false)} className="flex flex-col absolute w-fit bg-dark-bg-color text-dark-text-color">
          <NavMenu className="p-2 hover:bg-light-point-color dark:hover:bg-dark-point-color" />
        </div>
      ) : (
        ''
      )}
    </>
  );
}
export default NavDropdown;
