import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getConsoles } from '../redux/consoleSlice';
import { CiFacebook, CiTwitter, CiInstagram } from 'react-icons/ci';
import { Carousel } from 'react-responsive-carousel';

const ConsoleItems = () => {
  const dispatch = useDispatch();
  const consoles = useSelector((state) => state.consoles.consoles);
  useEffect(() => {
    dispatch(getConsoles())
  },[dispatch]);

  return (
    <div className="flex flex-col w-full justify-around h-screen p-4 ">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold">LATEST CONSOLES</h1>
        <p className="text-lg">Please select a Console</p>
      </div>
    
      <carousel className="w-full flex justify-around">
        {consoles.map((console) => (
            <div key={console.id} className="flex flex-col gap-1 w-60 h-72 items-center justify-between p-2">
              <img src={console.photo} alt={console.name} className="w-4/6 h-2/5" />
              <p className="text-lg font-bold">{console.name}</p>
              <div className="flex flex-col gap-1 items-center">
                <p className="text-center text-xs">{console.description.slice(0, 60)}...</p>
                <div className="flex gap-3 text-lg">
                  <CiFacebook />
                  <CiTwitter />
                  <CiInstagram />
                </div>
              </div>  
            </div>
        ))}
      </carousel>
    </div>
  )
}
export default ConsoleItems;
