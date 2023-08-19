import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addConsole } from '../../redux/actions'
const ConsoleForm = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false)
  const [consoleName, setConsoleName] = useState('');
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [rentalPrice, setRentalPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [consolePhoto, setConsolePhoto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true)
    const newConsole = { name: consoleName, purchase_price: purchasePrice, rental_price: rentalPrice, description: description, photo: consolePhoto };
    await dispatch(addConsole(newConsole));
    setConsoleName('');
    setPurchasePrice(0);
    setRentalPrice(0);
    setDescription('');
    setConsolePhoto('')
    setDisabled(false)
  };

  return (
    <div className="flex flex-col gap-4 items-center  p-2 rounded-lg">
      <h2 className="text-2xl font-bold text-secondary">Add a New Console</h2>
      <form className="flex flex-col gap-2 p-2 border" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="text-secondary text-left px-2">Name:</label>
          <input required id="name"
            className="w-full bg-primary text-black rounded-full p-2 border" type="text" value={consoleName} onChange={(e) => setConsoleName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="purchasePrice" className="text-secondary text-left px-2">Purchase Price:</label>
          <input required className="w-full bg-primary border text-black rounded-full p-2" id="purchasePrice" type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="rentalPrice" className="text-secondary text-left px-2">Rental Price:</label>
          <input required className="w-full bg-primary text-black rounded-full border p-2" id="rentalPrice" type="number" value={rentalPrice} onChange={(e) => setRentalPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description" className="text-secondary text-left px-2">Description:</label>
          <input required className="w-full bg-primary text-black rounded-full border p-2" id="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="photo" className="text-secondary text-left px-2">Photo:</label>
          <input required className="w-full bg-primary text-black rounded-full border p-2" id="photo" type="text" value={consolePhoto} onChange={(e) => setConsolePhoto(e.target.value)} />
        </div>
        <button type="submit" disabled={disabled}
          className={disabled ? "w-full border text-light rounded-lg p-2 mt-2" : "w-full bg-secondary text-primary rounded-lg p-2 mt-2"}>Add Console</button>
      </form>
    </div>
  );
}

export default ConsoleForm
