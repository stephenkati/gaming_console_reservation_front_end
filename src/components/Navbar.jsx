import { Link } from 'react-router-dom';
import Logout from './logout';

const links = [
  { path: '/', text: 'Home' },
  { path: '/dummy', text: 'Dummy' },
];

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200">
      <span className="inline-block lg:hidden cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </span>
      <span>Logo</span>

      <ul className="flex justify-between items-center gap-4">
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
