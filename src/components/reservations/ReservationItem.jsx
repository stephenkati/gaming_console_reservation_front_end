import PropTypes from 'prop-types';

function ReservationItem({ reservation }) {
  return (
    <div key={reservation.id} className="rounded p-4 text-center">
      <div className="mb-4 grid place-items-center rounded-full w-52 h-52 mx-auto bg-gray-100">
        <img
          src={reservation.console.photo || 'https://via.placeholder.com/150'}
          alt={reservation.console.name}
          className="object-cover rounded"
        />
      </div>

      {console.log(reservation)}
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
    </div>
  );
}

ReservationItem.propTypes = {
  reservation: PropTypes.object.isRequired,
};

export default ReservationItem;
