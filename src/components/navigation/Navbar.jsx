import { Link } from 'react-router-dom';
import Logout from '../logout';
import MenuIcon from './MenuIcon';

const links = [
  { path: '/', text: 'Home' },
  { path: '/dummy', text: 'Dummy' },
];

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 relative">
      <MenuIcon />

      <span className="hidden lg:inline-block">Logo</span>

      <div
        className="absolute top-0 right-0 w-full text-left bg-gray-100 p-4 lg:hidden"
        id="menu"
      >
        <MenuIcon />

        <ul className="text-center">
          {links.map((link) => (
            <li key={link.path} className="py-2 hover:bg-gray-200 rounded">
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
