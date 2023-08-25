import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import destopBg from '../images/welcome-bg-desktop.jpg';
import mobileBg from '../images/welcome-bg-mobile.jpg';

const Welcome = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="h-screen overflow-hidden bg-cover bg-no-repeat p-12 text-center"
      style={{
        backgroundImage: `url(${isMobile ? mobileBg : destopBg})`,
      }}
    >
      <div
        className="absolute grid place-items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
        }}
      >
        <div className="items-center text-gray-300 p-2 rounded w-full">
          <h1 className="text-4xl md:text-6xl text-white font-semi-bold mb-6">
            Welcome to{' '}
            <span className="consolehub text-lime-400 font-bold">
              ConsoleHub
            </span>
            <span className="font-thin text-2xl md:text-4xl block mt-2">
              Your Ultimate Gaming Experience Awaits!
            </span>
          </h1>

          <p className="text-md md:text-lg text-gray-400 mb-6 font-light max-w-4xl mx-auto">
            ConsoleHub is a cutting-edge app that lets you book gaming sessions.
            Whether you&apos;re a hardcore gamer or just looking to unwind,
            it&apos;s a seamless way to get your game on. Explore the endless
            possibilities and level up your gaming experience today!
          </p>

          <div className="flex justify-center align-center gap-4">
            <Link
              to="/register"
              className="text-sm md:text-lg px-8 py-2 bg-lime-400 rounded-full text-gray-900 font-bold hover:bg-lime-500"
            >
              Sign Up
            </Link>

            <Link
              to="/login"
              className="text-sm md:text-lg px-8 py-2 text-gray-400 rounded-full border border-transparent font-bold hover:border-gray-300 hover:text-gray-300"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
