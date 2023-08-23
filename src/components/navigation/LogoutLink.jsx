import { removeToken } from '../../utils/localStorage';
import { Link } from 'react-router-dom';

const LogoutLink = () => {
  const handleLogout = () => {
    removeToken();
  };

  return (
    <Link
      to="/login"
      onClick={handleLogout}
      className="py-2 px-4 hover:bg-gray-200 w-full inline-block font-semibold"
    >
      Logout
    </Link>
  );
};

export default LogoutLink;
