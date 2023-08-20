import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getConsoles } from '../redux/consoleSlice';
import { CiFacebook, CiTwitter, CiInstagram } from 'react-icons/ci';

const ConsoleItems = () => {
  const dispatch = useDispatch();
  const consoles = useSelector((state) => state.consoles.consoles);
  useEffect(() => {
    dispatch(getConsoles())
  },[dispatch]);

  return (
    <div className="flex w-full justify-around h-screen items-center p-4 ">
      {consoles.map((console) => (
        <div key={console.id} className="flex flex-col gap-1 w-60 bg-green-500 h-80 items-center justify-between p-2">
          <img src={console.photo} alt={console.name} className="w-11/12 h-2/5" />
          <p className="my-1">{console.name}</p>
          <div className="flex flex-col gap-1 items-center">
            <p>{console.description}</p>
            <div className="flex gap-1">
              <CiFacebook />
              <CiTwitter />
              <CiInstagram />
            </div>
          </div>  
        </div>
      ))}
    </div>
  )
}
export default ConsoleItems;
