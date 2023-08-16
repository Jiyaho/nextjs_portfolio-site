import NavDropdown from './NavDropdown';
import NavMenu from '../atoms/NavMenu';

function Navigation() {
  return (
    <>
      <div className="hidden md:flex">
        <NavMenu className="p-5 mr-10 c_nav-bar" />
      </div>
      <div className="md:hidden p-5">
        <NavDropdown />
      </div>
    </>
  );
}
export default Navigation;
