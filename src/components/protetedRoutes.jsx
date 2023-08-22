import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { getToken } from '../utils/localStorage';

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  // const token = getToken()
  // const isAuthenticatedPersisted = isAuthenticated || !!token;
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoutes;
