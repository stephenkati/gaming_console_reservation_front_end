import { removeToken } from '../../utils/localStorage';
import { Link } from 'react-router-dom';

const LogoutLink = () => {
  const handleLogout = () => {
    removeToken();
  };

  return (
    <Link to="/login" onClick={handleLogout}>
      Logout
    </Link>
  );
};

export default LogoutLink;
