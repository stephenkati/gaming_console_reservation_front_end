import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from './pages/register';
import Login from './pages/login';
import AddConsole from './pages/AddConsole';

import ProtectedRoutes from './components/users/protetedRoutes';
import Layout from './components/Layout';
import Reservations from './pages/Reservations';
import ConsoleDetail from './components/consoles/ConsoleDetail';

import store from './redux/store';
import './App.css';
import Consoles from './pages/consoles';
import ReserveConsole from './components/reservations/ReserveConsole';

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
              <Route path="/" element={<Consoles />} />
              <Route path="/console/:id" element={<ConsoleDetail />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/consoles/new" element={<AddConsole />} />
              <Route path="/reserve/:consoleId" element={<ReserveConsole />} />
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
