import ThemeSwitcher from '../atoms/ThemeSwitcher';
import Navigation from '../molecules/Navigation';

function Header() {
  return (
    <header className="top-0 sticky bg-[rgb(255,255,255,0.9)] z-50 dark:bg-[rgb(0,0,0,0.9)]">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between p-3">
        <Navigation />
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
export default Header;
