import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { createReservation } from '../../redux/reservations/reserveConsoleSlice';
import { useState } from 'react';

import bgImage from '../../images/form-bg-desktop.jpg';

const ReserveConsole = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { consoleId } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null);
  const [city, setCity] = useState('');
  const [errors, setErrors] = useState({ city: '', selectedDate: '' });
  const user = useSelector((state) => state.user.user);

  const handleDateChange = (date) => {
    setSelectedDate(date);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    setFormattedDate(
      `${year}-${month.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`
    );
  };

  const reservation = {
    console_id: consoleId,
    city,
    reserve_date: formattedDate,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    let newErrors = { city: '', selectedDate: '' };
    if (!city) {
      newErrors.city = 'City is required';
    }
    if (!selectedDate) {
      newErrors.selectedDate = 'Date is required';
    }
    setErrors(newErrors);

    if (newErrors.city || newErrors.selectedDate) {
      return;
    }

    await dispatch(createReservation(reservation));
    navigate('/reservations');
    setSelectedDate('');
    setCity('');
  };

  return (
    <div
      className="lg:h-screen h-[90vh] overflow-hidden bg-cover bg-no-repeat p-12 text-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div
        className="absolute grid place-items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{
          backgroundColor: 'rgba(115, 145, 6, 0.9)',
        }}
      >
        <div className="w-full flex flex-col gap-4 text-center text-gray-300 items-center justify-center h-full px-2 py-4">
          <h1 className="font-bold text-xl text-white border-b border-white border-solid inline-block pb-2 px-7 tracking-widest">
            BOOK A RESERVATION
          </h1>

          <p className="text-sm max-w-md text-white">
            Try out the latest consoles and a variety of games. Whether
            it&apos;s for a special occasion or to explore new gaming horizons,
            renting a console gives you the flexibility, convenience, and
            excitement you&apos;re looking for.{' '}
          </p>

          <form className="p-2 flex flex-col gap-4 max-w-md">
            <div>
              <input
                type="text"
                placeholder="Enter your city"
                aria-label="City"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setErrors({ ...errors, city: '' });
                }}
                className={`w-full bg-gray-100 bg-opacity-20 border border-white text-white rounded-full py-2 px-4 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent focus:bg-lime-400 focus:bg-opacity-20 ${
                  errors.city ? 'border-red-500' : 'border-white'
                }`}
              />
            </div>

            <div className="w-full flex flex-col gap-4 md:flex-row md:align-center">
              <div className="w-full">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  aria-label="Date"
                  dateFormat="yyyy/MM/dd"
                  placeholderText="Select a date"
                  className={`w-full bg-gray-100 bg-opacity-20 border border-white text-white rounded-full py-2 px-4 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent focus:bg-lime-400 focus:bg-opacity-20 ${
                    errors.selectedDate ? 'border-red-500' : 'border-white'
                  }`}
                />
              </div>

              <div className="grid place-items-center">
                <input
                  type="submit"
                  value="Reserve"
                  onClick={handleSubmit}
                  className="w-full md:w-max bg-white text-lime-700 rounded-full py-2 px-6 hover:bg-gray-200 cursor-pointer"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReserveConsole;
