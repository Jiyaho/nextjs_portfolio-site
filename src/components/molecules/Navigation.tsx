import NavDropdown from './NavDropdown';
import NavMenu from '../atoms/NavMenu';

function Navigation() {
  return (
    <>
      <div className="hidden md:flex">
        <NavMenu className="p-5 mr-10" />
      </div>
      <NavDropdown />
    </>
  );
}
export default Navigation;
