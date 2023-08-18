import { Link } from 'react-router-dom';
import Logout from './logout';

const links = [
  { path: '/', text: 'Home' },
  { path: '/dummy', text: 'Dummy' },
];

function Navbar() {
  return (
    <nav className="h-16 bg-neutral text-neutral-content shadow-md font-bold">
      <span>Logo</span>

      <ul>
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
