import PropTypes from 'prop-types';

function ReservationItem({ reservation }) {
  return (
    <div
      key={reservation.id}
      className="border border-gray-200 rounded p-4 text-center"
    >
      <div className="h-40 w-full bg-gray-200 mb-4 rounded grid place-items-center">
        <span>Image</span>
      </div>

      {console.log(reservation)}
      <h2 className="font-bold px-4 pt-2 pb-3 border-b border-b-2 border-dashed border-gray-300 inline-block">
        Console: {reservation.console_id}
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
