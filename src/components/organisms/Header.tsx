import ThemeSwitcher from '../atoms/ThemeSwitcher';
import Navigation from '../molecules/Navigation';

function Header() {
  return (
    <header className="top-0 sticky bg-[rgb(255,255,255,0.7)] z-50 dark:bg-[rgb(0,0,0,0.6)]">
      <nav className="max-w-2xl p-1 mx-auto px-5 flex justify-between">
        <Navigation />
        <ThemeSwitcher className="c_nav-bar cursor-pointer rounded-[50%] p-5" />
      </nav>
    </header>
  );
}
export default Header;
