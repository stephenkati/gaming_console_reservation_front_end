import { Outlet } from 'react-router-dom';

import Navbar from './navigation/Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="layout flex flex-col lg:flex-row min-h-screen">
      <Navbar />

      <main className="p-4 lg:border-l lg:border-gray-200 flex-1 overflow-y-auto lg:h-screen">
        <Outlet />
      </main>

      <footer className="lg:hidden sticky bottom-0 w-full z-10 border-t border-gray-200 bg-white">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
