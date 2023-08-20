import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getConsoles } from '../redux/consoleSlice';

const ConsoleItems = () => {
  const dispatch = useDispatch();
  const consoles = useSelector((state) => state.consoles.consoles);
  useEffect(() => {
    dispatch(getConsoles())
  },[dispatch]);

  return (
    <div>
      {consoles.map((console) => (
        <div key={console.id}>
          <img src={console.photo} alt={console.name} />
          <p>{console.name}</p>
          <p>{console.rental_price}</p>
        </div>
      ))}
    </div>
  )
}

export default ConsoleItems;
