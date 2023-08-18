import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
