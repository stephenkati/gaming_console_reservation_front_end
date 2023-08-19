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
    <div className="app">
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
              <Route path="/" element={<h1>Consoles</h1>} />
              <Route path="/reserve" element={<h1>Reserve a console</h1>} />
              <Route path="/reservations" element={<h1>My reservations</h1>} />
              <Route path="/new" element={<h1>Add a new console</h1>} />
              <Route path="/delete" element={<h1>Delete a console</h1>} />
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
