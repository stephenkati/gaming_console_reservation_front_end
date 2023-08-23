import LogoutLink from './LogoutLink';
import { Link } from 'react-router-dom';

const links = [
  { path: '/', text: 'Consoles' },
  { path: '/reservations', text: 'Reservations' },
  { path: '/consoles/new', text: 'Add new console' },
];

function DesktopLinks() {
  return (
    <ul className="hidden lg:block w-full">
      {links.map((link) => (
        <li key={link.path}>
          <Link
            to={link.path}
            className="py-2 px-4 hover:bg-lime-400 w-full inline-block font-semibold"
          >
            {link.text}
          </Link>
        </li>
      ))}
      <li>
        <LogoutLink />
      </li>
    </ul>
  );
}

export default DesktopLinks;
