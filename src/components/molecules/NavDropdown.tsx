'use client';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLinks } from '@/constants';
import Link from 'next/link';
import { useState } from 'react';
import NavMenu from '../atoms/NavMenu';

function NavDropdown() {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div className="md:hidden p-5">
      <button onClick={handleMenuToggle}>{menuToggle ? <RxHamburgerMenu /> : <AiOutlineClose />}</button>
      {menuToggle ? (
        ''
      ) : (
        <div className="flex flex-col bg-gray-100">
          <NavMenu linkClass="p-2" />
        </div>
      )}
    </div>
  );
}
export default NavDropdown;
