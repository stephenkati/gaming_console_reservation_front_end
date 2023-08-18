import Navbar from './navigation/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <main className="p-4 lg:border-l lg:border-gray-200 flex-1 overflow-y-auto lg:h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
