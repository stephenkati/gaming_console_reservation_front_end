import { useParams } from 'react-router-dom';
// import { getUser } from '../../utils/localStorage';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { createReservation } from '../../redux/reservations/reserveConsoleSlice';
import { useState } from 'react';

const ReserveConsole = () => {
  const dispatch = useDispatch();
  const { consoleId } = useParams();
  // const userId = getUser();
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

    setFormattedDate(`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`);
  };

  const reservation = {
    // userId: user && user.id,
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
  };

  return (
    <div className="w-full flex flex-col gap-4 text-center items-center justify-center h-full px-2 py-7">
      <h1 className="font-bold tracking-widest text-xl border-b border-black border-solid inline-block pb-2 px-7">BOOK A CONSOLE RESERVATION</h1>

      <p className="text-sm max-w-md">Try out the latest consoles and a variety of games. Whether it&apos;s for a special occasion or to explore new gaming horizons, renting a console gives you the flexibility, convenience, and excitement you&apos;re looking for. </p>

      <form className="flex flex-wrap max-w-max gap-1 justify-center">
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setErrors({ ...errors, city: '' });
          }}
          className={`border rounded-full p-2 w-1/3 min-w-max focus:outline-none ${errors.city ? 'border-red-500' : 'border-secondary'
            }`}
        />
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy/MM/dd"
          placeholderText="mm/dd/yyyy"
          className={`border rounded-full p-2 w-full focus:outline-none ${errors.selectedDate ? 'border-red-500' : 'border-secondary'
            }`}
        />
        <input
          type="submit"
          value="Reserve"
          onClick={handleSubmit}
          className="bg-secondary text-white rounded-full p-2 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default ReserveConsole;
