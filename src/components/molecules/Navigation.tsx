import NavDropdown from './NavDropdown';
import NavMenu from '../atoms/NavMenu';

function Navigation() {
  return (
    <nav>
      <div className="hidden md:flex">
        <NavMenu linkClass="p-5" />
      </div>
      <NavDropdown />
    </nav>
  );
}
export default Navigation;
