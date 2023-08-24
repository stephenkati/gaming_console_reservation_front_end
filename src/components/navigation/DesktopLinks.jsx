import LogoutLink from './LogoutLink';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const links = [
  { path: '/', text: 'Consoles' },
  { path: '/reservations', text: 'Reservations' },
  { path: '/consoles/new', text: 'Add new console' },
  { path: '/consoles/delete', text: 'Delete Console' },
];

function DesktopLinks() {
  const location = useLocation();

  return (
    <ul className="hidden lg:block w-full">
      {links.map((link) => (
        <li key={link.path}>
          <Link
            to={link.path}
            className={`py-2 px-4 hover:bg-gray-100 w-full inline-block font-semibold ${
              location.pathname === link.path ? 'bg-lime-400' : ''
            }`}
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
