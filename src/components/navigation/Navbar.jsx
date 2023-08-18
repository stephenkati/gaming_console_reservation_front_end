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
    // Add with of 20% when the screen is lg or larger
    <nav className="flex justify-between items-center p-4 relative lg:h-screen lg:flex-col lg:justify-space-between lg:items-start lg:pr-0 flex-0.5">
      <MenuIcon onClick={handleMenuClick} />

      <span className="hidden lg:inline-block py-2 px-4">Logo</span>

      <MobileMenu />

      <DesktopLinks />

      <SearchIcon />

      <span className="hidden lg:inline-block"></span>
      <span className="hidden lg:inline-block"></span>
    </nav>
  );
}

export default Navbar;
