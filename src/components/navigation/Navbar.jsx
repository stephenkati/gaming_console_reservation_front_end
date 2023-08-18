import MenuIcon from './MenuIcon';
import SearchIcon from './SearchIcon';
import DesktopLinks from './DesktopLinks';
import MobileMenu from './MobileMenu';

const handleMenuClick = () => {
  const menu = document.querySelector('#menu');
  menu.classList.toggle('hidden');
};

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 relative lg:h-screen lg:flex-col lg:justify-space-between lg:items-start lg:pr-0 flex-0.5">
      <MenuIcon onClick={handleMenuClick} />

      {/* Add an exotic font-family */}
      <span className="consolehub hidden lg:inline-block py-2 px-4 font-extrabold text-4xl">
        ConsoleHub
      </span>

      <MobileMenu />

      <DesktopLinks />

      <SearchIcon />

      <span className="hidden lg:inline-block"></span>
      <span className="hidden lg:inline-block"></span>
    </nav>
  );
}

export default Navbar;
