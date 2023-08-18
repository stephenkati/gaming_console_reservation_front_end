import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from './pages/register';
import Login from './pages/login';

import ProtectedRoutes from './components/protetedRoutes';
import Layout from './components/Layout';

import store from './redux/store';
import './App.css';

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
                  <Layout />
                </ProtectedRoutes>
              }
            >
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/dummy" element={<h1>Dummy</h1>} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
