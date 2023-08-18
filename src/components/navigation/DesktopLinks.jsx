import Logout from './Logout';
import { Link } from 'react-router-dom';

const links = [
  { path: '/', text: 'Consoles' },
  { path: '/reserve', text: 'Reserve a console' },
  { path: '/reservations', text: 'My reservations' },
  { path: '/new', text: 'Add a new console' },
  { path: '/delete', text: 'Delete a console' },
];

function DesktopLinks() {
  return (
    <ul className="hidden lg:block w-full">
      {links.map((link) => (
        <li key={link.path} className="py-2 px-4 hover:bg-lime-400">
          <Link to={link.path}>{link.text}</Link>
        </li>
      ))}
      <li className="py-2 px-4 hover:bg-lime-400">
        <Logout />
      </li>
    </ul>
  );
}

export default DesktopLinks;
