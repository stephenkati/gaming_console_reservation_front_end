import { useState } from 'react';

const ReservationForm = () => {
  const [consoleId, setConsoleId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (consoleId && startDate && city) {
      console.log({ consoleId, startDate, city });
      //Can use the object { consoleId, startDate, city } to create the reservation here
      //using a registration slice
      setConsoleId('');
      setStartDate('');
      setCity('');
    }
  };

  return (
    <div>
      <h2>Add a New Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Console:</label>
          <select value={consoleId} onChange={(e) => setConsoleId(e.target.value._id)}>
            <option value="">Select Console</option>
            {/* Map your console options here */}
          </select>
        </div>
        <div>
          <label>Start Date:</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div>
          <label>City:</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <button type="submit">Add Reservation</button>
      </form>
    </div>
  );
};

export default ReservationForm;
