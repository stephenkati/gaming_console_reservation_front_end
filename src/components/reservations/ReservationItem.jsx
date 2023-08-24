// import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteReservation } from '../../redux/reservations/reserveConsoleSlice';
import { fetchUserReservations } from '../../redux/reservations/reservationsSlice';

const ReservationItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteReservation(id)).then(() => {
      dispatch(fetchUserReservations());
    });
  };

  return (
    <div key={data.id} className="rounded p-4 text-center w-full">
      <div className="mb-4 grid place-items-center rounded-full w-52 h-52 mx-auto bg-gray-100">
        <img
          src={data.console.photo || 'https://via.placeholder.com/150'}
          alt={data.console.name}
          className="object-cover rounded"
        />
      </div>

      <h2 className="font-semi-bold px-4 pt-2 pb-3 border-b border-b-2 border-dashed border-gray-300 inline-block text-gray-700 text-lg">
        {data.console.name}
      </h2>

      <div className="pt-2 text-xs">
        <p>
          Date:{' '}
          <span className="text-gray-500 font-semibold">
            {data.reserve_date.split('T')[0]}
          </span>
        </p>
        <p>
          City: <span className="text-gray-500 font-semibold">{data.city}</span>
        </p>
      </div>

      <button
        type="button"
        onClick={() => handleDelete(data.id)}
        className="border border-lime-400 text-lime-500 hover:border-red-500 hover:bg-red-500 hover:text-white py-2 px-4 rounded mt-4"
      >
        Cancel reservation
      </button>
    </div>
  );
};

ReservationItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ReservationItem;
