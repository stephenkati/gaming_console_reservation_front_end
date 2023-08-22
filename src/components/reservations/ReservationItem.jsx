import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteReservation } from '../../redux/reservations/reserveConsoleSlice';

const ReservationItem = ({ reservation }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteReservation(id));
  };

  return (
    <div key={reservation.id} className="rounded p-4 text-center w-full">
      <div className="mb-4 grid place-items-center rounded-full w-52 h-52 mx-auto bg-gray-100">
        <img
          src={reservation.console.photo || 'https://via.placeholder.com/150'}
          alt={reservation.console.name}
          className="object-cover rounded"
        />
      </div>
      <h2 className="font-bold px-4 pt-2 pb-3 border-b border-b-2 border-dashed border-gray-300 inline-block">
        {reservation.console.name}
      </h2>

      <div className="pt-2">
        <p>
          Date:{' '}
          <span className="text-gray-500 font-semibold">
            {reservation.reserve_date.split('T')[0]}
          </span>
        </p>
        <p>
          City:{' '}
          <span className="text-gray-500 font-semibold">
            {reservation.city}
          </span>
        </p>
      </div>

      <button
        type="button"
        onClick={() => handleDelete(reservation.id)}
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
      >
        Delete
      </button>
    </div>
  );
}

ReservationItem.propTypes = {
  reservation: PropTypes.object.isRequired,
};

export default ReservationItem;
