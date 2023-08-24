import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import bgImage from '../../images/form-bg-desktop.jpg';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.user);

  const user = { username, email, password, confirmPassword };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

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

    if (
      newErrors.username ||
      newErrors.email ||
      newErrors.password ||
      newErrors.confirmPassword
    ) {
      return;
    }

    await dispatch(registerUser(user));
    navigate('/');
  };

  return (
    <div
      className="h-screen overflow-hidden bg-cover bg-no-repeat p-12 text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div
        className="absolute grid place-items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{
          backgroundColor: 'rgba(115, 145, 6, 0.9)',
        }}
      >
        <div className="items-center text-gray-300 p-2 rounded w-full max-w-[40rem] mx-auto">
          <h1 className="text-2xl font-semi-bold text-white mb-6">Sign up</h1>

          <form className="flex flex-col gap-4 p-2">
            {error && <p className="text-red-500">{error}</p>}

            <div className="flex flex-col gap-4 md:flex-row md:align-center md:gap-0">
              <div className="flex-1">
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  aria-label="Username"
                  className="w-full bg-primary text-black rounded-full py-2 px-4 md:rounded-r-none md:rounded-l-full"
                />
                {errors.username && (
                  <p className="text-red-500">{errors.username}</p>
                )}
              </div>

              <div className="flex-1">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email"
                  className="w-full bg-primary text-black rounded-full py-2 px-4 md:rounded-l-none md:rounded-r-full"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:align-center md:gap-0">
              <div className="flex-1">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-label="Password"
                  className="w-full bg-primary text-black rounded-full py-2 px-4 md:rounded-r-none md:rounded-l-full"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </div>

              <div className="flex-1">
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  aria-label="Confirm Password"
                  className="w-full bg-primary text-black rounded-full py-2 px-4 md:rounded-l-none md:rounded-r-full"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            {isLoading ? (
              <div>
                <div className="border border-white rounded-full py-3 px-4 grid place-items-center w-full">
                  <div role="status" className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-lime-400"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="text-white text-xs flex-1 w-max">
                      Signing in...
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid place-items-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full md:w-auto border border-white text-white rounded-full py-2 px-6 hover:bg-white hover:text-lime-500"
                >
                  Sign up
                </button>
              </div>
            )}
          </form>

          <h2>
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-lg font-semi-bold text-white hover:text-gray-300 hover:underline"
            >
              Log in
            </Link>
            .
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
