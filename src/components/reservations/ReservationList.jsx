import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserReservations } from '../../redux/reservations/reservationsSlice';

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
    <div className="flex flex-col gap-4">
      <header className="text-center">
        <h1 className="text-3xl font-bold mb-4">Reservations</h1>
        <p>These are your reserved gamming consoles</p>
      </header>

      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <p>Date: {reservation.reserve_date}</p>
            <p>City: {reservation.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationList;
