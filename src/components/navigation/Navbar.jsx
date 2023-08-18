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
    <nav className="flex justify-between items-center p-4 relative">
      <MenuIcon onClick={handleMenuClick} />

      <span className="hidden lg:inline-block">Logo</span>

      <MobileMenu />

      <DesktopLinks />

      <SearchIcon />
    </nav>
  );
}

export default Navbar;
