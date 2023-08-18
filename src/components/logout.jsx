import { useNavigate } from 'react-router-dom';
import { removeToken } from '../utils/localStorage';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate('/login');
  };

  return (
    <div>
      <button
        type="button"
        className="bg-secondary text-primary rounded-lg p-2 mt-2"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
};

export default Logout;
