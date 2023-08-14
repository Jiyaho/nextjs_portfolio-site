import DarkMode from '../atoms/DarkMode';
import Navigation from '../molecules/Navigation';

function Header() {
  return (
    <header>
      <div className="max-w-6xl mx-auto px-4 flex justify-between p-3">
        <Navigation />
        <DarkMode />
      </div>
    </header>
  );
}
export default Header;
