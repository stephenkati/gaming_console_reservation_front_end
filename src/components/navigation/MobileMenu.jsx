import { Link } from 'react-router-dom';

import Logout from './logout';
import MenuIcon from './MenuIcon';

const links = [
  { path: '/', text: 'Home' },
  { path: '/dummy', text: 'Dummy' },
];

function handleMenuClick() {
  const menu = document.querySelector('#menu');
  menu.classList.toggle('hidden');
}

function MobileMenu() {
  return (
    <div
      className="absolute top-0 right-0 w-full text-left bg-gray-100 p-4 lg:hidden hidden"
      id="menu"
    >
      <MenuIcon onClick={handleMenuClick} />

      <ul className="text-center">
        {links.map((link) => (
          <li
            key={link.path}
            className="py-2 hover:bg-gray-200 rounded"
            onClick={handleMenuClick}
          >
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
        <li
          className="py-2 hover:bg-gray-200 rounded"
          onClick={handleMenuClick}
        >
          <Logout />
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
