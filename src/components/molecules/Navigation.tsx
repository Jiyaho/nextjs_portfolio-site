import NavDropdown from './NavDropdown';
import NavMenu from '../atoms/NavMenu';

function Navigation() {
  return (
    <>
      <div className="hidden md:flex">
        <NavMenu className="p-5" />
      </div>
      <NavDropdown />
    </>
  );
}
export default Navigation;
