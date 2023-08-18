import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/register';
import Login from './pages/login';
import Logout from './components/logout';
import ProtectedRoutes from './components/protetedRoutes';

const App = () => {

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Logout />
              </ProtectedRoutes>
            }
          />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
};

export default App;
