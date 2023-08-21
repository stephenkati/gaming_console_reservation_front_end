import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from './pages/register';
import Login from './pages/login';
import AddConsole from './pages/AddConsole';

import ProtectedRoutes from './components/protetedRoutes';
import Layout from './components/Layout';
import Reservations from './pages/Reservations';

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
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/new" element={<AddConsole />} />
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
