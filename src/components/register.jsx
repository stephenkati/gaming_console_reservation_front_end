import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({username: '', email: '', password: '', confirmPassword: ''});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.user);

  const user = { username, email, password, confirmPassword };

  const handleSubmit = async (e) => {
    e.preventDefault()

    let newErrors = { username: '', email: '', password: '', confirmPassword: '' };

    if (!username) {
      newErrors.username = 'Username cannot be empty.';
    }

    if (!email) {
      newErrors.email = 'Email cannot be empty.';
    }

    if (!password) {
      newErrors.password = 'Password cannot be blank.';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password cannot be blank.';
    }

    setErrors(newErrors);

    if (newErrors.username || newErrors.email || newErrors.password || newErrors.confirmPassword) {
      return;
    }

    await dispatch(registerUser(user))
    navigate('/');
  }
  
  return (
    <div className="flex flex-col gap-4 items-center bg-neutral p-2 rounded-lg">
      <h1 className="text-2xl font-bold text-secondary">Register</h1>

      <form className="flex flex-col gap-2 p-2">
        {error && (
          <p className="text-red-500">{error}</p>
        )}

        <label htmlFor="username" className="text-secondary text-left px-2">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="John Doe"
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full bg-primary text-black rounded-full p-2"
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}

        <label htmlFor="email" className="text-secondary text-left px-2">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="johndoe@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full bg-primary text-black rounded-full p-2"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <label htmlFor="password" className="text-secondary text-left px-2">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full bg-primary text-black rounded-full p-2"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}

        <label htmlFor="Confirm password" className="text-secondary text-left px-2">Confirm password:</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full bg-primary text-black rounded-full p-2"
        />
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}

        {isLoading ? (
          <p className="text-lg text-secondary pulse">Loading...</p>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-secondary text-primary rounded-lg p-2 mt-2"
          >
            Register
          </button>
        )}

      </form>

      <h2 className="text-secondary">
        Already have an account?
        <Link to="/login" className="text-xl text-accent hover:text-primary">Login</Link>
      </h2>
    </div>
  )
};

export default RegisterForm;
