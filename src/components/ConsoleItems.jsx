import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getConsoles } from '../redux/consoleSlice';
import ConsoleItem from './ConsoleItem';
import Slider from './slider/Slider';

const ConsoleItems = () => {
  const dispatch = useDispatch();
  const consoles = useSelector((state) => state.consoles.consoles);

  useEffect(() => {
    dispatch(getConsoles());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center gap-4 text-gray-500 text-sm py-8 h-full">
      <header className="text-center">
        <h1 className="text-3xl font-semi-bold mb-4 text-gray-800">
          Latest Consoles
        </h1>

        <p className="font-semi-bold">
          Please select a console to see more details
        </p>
        <span className="w-32 border-b-2 border-dashed border-gray-300 inline-block mt-4"></span>
      </header>

      <div className="w-full relative flex items-center py-4 px-16 md:px-12 lg:px-20 xl:px-32">
        <Slider storedData={consoles} Component={ConsoleItem} />
      </div>
    </div>
  );
};
export default ConsoleItems;
