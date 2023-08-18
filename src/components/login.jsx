import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logInUser } from '../redux/userSlice';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.user);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let newErrors = { username: '', password: '' };
    if (!username) {
      newErrors.username = 'Username cannot be empty.';
    }
    if (!password) {
      newErrors.password = 'Password cannot be blank.';
    }

    setErrors(newErrors);

    if (newErrors.username || newErrors.password) {
      return;
    }

    await dispatch(logInUser({ username, password }));
    navigate('/');
  };

  return (
    <div className="flex flex-col gap-4 items-center bg-neutral p-2 rounded-lg">
      <h1 className="text-2xl font-bold text-secondary">Login</h1>

      <form className="flex flex-col gap-2 p-2">
        {error && (
          <p className="text-red-500">{error}</p>
        )}

        <label htmlFor="username" className="text-secondary text-left px-2">
          Username:
        </label>
        <input
          type="text"
          id="username"
          placeholder="John Doe"
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full bg-primary text-black rounded-full p-2"
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}

        <label htmlFor="password" className="text-secondary text-left px-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full bg-primary text-black rounded-full p-2"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}

        {isLoading ? (
          <p className="text-lg text-secondary pulse">Loading...</p>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-secondary text-primary rounded-lg p-2 mt-2"
          >
            Login
          </button>
        )}
      </form>

      <h2 className="text-secondary">
        Don&apos;t have an account?
        <Link to="/register" className="text-xl text-accent hover:text-primary">
          Register
        </Link>
      </h2>
    </div>
  );
};

export default LoginForm;
