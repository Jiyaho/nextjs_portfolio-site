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
    <div className="md:hidden p-5">
      <button onClick={handleMenuToggle}>{menuToggle ? <AiOutlineClose /> : <RxHamburgerMenu />}</button>
      {menuToggle ? (
        <div className="flex flex-col absolute w-fit bg-[rgba(0,0,0,0.4)]">
          <NavMenu className="p-2 hover:bg-sky-700" />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
export default NavDropdown;
