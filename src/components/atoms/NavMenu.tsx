import { NavLinks } from '@/constants';
import Link from 'next/link';

function NavMenu({ className }: { className: string }) {
  return (
    <>
      {NavLinks.map((link) => (
        <Link className={className} href={link.href} key={link.key}>
          {link.text}
        </Link>
      ))}
    </>
  );
}
export default NavMenu;
