import { NavLinks } from '@/constants';
import Link from 'next/link';

function NavMenu({ linkClass }: { linkClass: string }) {
  return (
    <>
      {NavLinks.map((link) => (
        <Link className={linkClass} href={link.href} key={link.key}>
          {link.text}
        </Link>
      ))}
    </>
  );
}
export default NavMenu;
