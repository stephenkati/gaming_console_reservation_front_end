import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../utils/localStorage';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { createReservation } from '../../redux/reservations/reserveConsoleSlice';

const ReserveConsole = () => {
  const dispatch = useDispatch();
  const { consoleId } = useParams();
  const userId = getUser();
  const [selectedDate, setSelectedDate] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null);
  const [city, setCity] = useState('');
  const [errors, setErrors] = useState({ city: '', selectedDate: '' });

  const handleDateChange = (date) => {
    setSelectedDate(date);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    setFormattedDate(`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`);
  };

  const reservation = {
    userId,
    consoleId,
    city,
    reserve_date: formattedDate,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    <div className="w-full">
      <h1>Reserve Console</h1>
      <form className="flex flex-wrap w-max gap-1 justify-center">
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setErrors({ ...errors, city: '' }); // Clear city error when input changes
          }}
          className={`border rounded p-2 w-1/3 focus:outline-none ${
            errors.city ? 'border-red-500' : 'border-blue-500'
          }`}
        />
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy/MM/dd"
          placeholderText="mm/dd/yyyy"
          className={`border rounded p-2 w-full focus:outline-none ${
            errors.selectedDate ? 'border-red-500' : 'border-blue-500'
          }`}
        />
        <input
          type="submit"
          value="Reserve"
          onClick={handleSubmit}
          className="bg-blue-500 text-white rounded p-2 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default ReserveConsole;
