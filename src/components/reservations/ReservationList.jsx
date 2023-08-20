import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserReservations } from '../../redux/reservations/reservationsSlice';

import Slider from './Slider';

function ReservationList() {
  const dispatch = useDispatch();
  const { reservations, isLoading, error } = useSelector(
    (state) => state.reservations
  );

  useEffect(() => {
    dispatch(fetchUserReservations());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return <h1 className="mt-8 text-center text-xl text-red-300">{error}</h1>;
  }

  return (
    <div className="flex flex-col gap-4 text-gray-500 text-sm h-full">
      <header className="text-center">
        <h1 className="text-3xl font-semi-bold mb-4 text-gray-800">
          Reservations
        </h1>
        <p className="font-semi-bold">
          You have <span className="font-bold">{reservations.length}</span>{' '}
          gamming console(s) reserved
        </p>
      </header>

      <div className="reservations_sliderborder border-gray-200 lg:flex-grow">
        <Slider reservations={reservations} />
      </div>
    </div>
  );
}

export default ReservationList;