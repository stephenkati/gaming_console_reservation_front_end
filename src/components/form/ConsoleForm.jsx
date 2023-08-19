import { useState } from 'react';

const ConsoleForm = () => {
  const [disabled, setDisabled] = useState(false)
  const [consoleName, setConsoleName] = useState('');
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [rentalPrice, setRentalPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [consolePhoto, setConsolePhoto] = useState('');

  const handleSubmit = (e) => {
    setDisabled(true)
    e.preventDefault();
    console.log(consoleName, purchasePrice, rentalPrice, description, consolePhoto);
  };

  return (
    <div className="flex flex-col gap-4 items-center bg-neutral p-2 rounded-lg">
      <h2 className="text-2xl font-bold text-secondary">Add a New Console</h2>
      <form className="flex flex-col gap-2 p-2" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="text-secondary text-left px-2">Name:</label>
          <input required id="name"
            className="w-full bg-primary text-black rounded-full p-2" type="text" value={consoleName} onChange={(e) => setConsoleName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="purchasePrice" className="text-secondary text-left px-2">Purchase Price:</label>
          <input className="w-full bg-primary text-black rounded-full p-2" id="purchasePrice" type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="rentalPrice" className="text-secondary text-left px-2">Rental Price:</label>
          <input className="w-full bg-primary text-black rounded-full p-2" id="rentalPrice" type="number" value={rentalPrice} onChange={(e) => setRentalPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description" className="text-secondary text-left px-2">Description:</label>
          <input className="w-full bg-primary text-black rounded-full p-2" id="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="photo" className="text-secondary text-left px-2">Photo:</label>
          <input className="w-full bg-primary text-black rounded-full p-2" id="photo" type="text" value={consolePhoto} onChange={(e) => setConsolePhoto(e.target.value)} />
        </div>
        <button type="submit" disabled={disabled}
          className="w-full bg-secondary text-primary rounded-lg p-2 mt-2">Add Console</button>
      </form>
    </div>
  );
}

export default ConsoleForm
