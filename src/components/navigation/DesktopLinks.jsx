import Logout from './logout';
import { Link } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: '/dummy', text: 'Dummy' },
];

function DesktopLinks() {
  return (
    <ul className="hidden lg:flex">
      {links.map((link) => (
        <li key={link.path} className="py-2 px-4 hover:bg-gray-200 rounded">
          <Link to={link.path}>{link.text}</Link>
        </li>
      ))}
      <li className="py-2 px-4 hover:bg-gray-200 rounded">
        <Logout />
      </li>
    </ul>
  );
}

export default DesktopLinks;
