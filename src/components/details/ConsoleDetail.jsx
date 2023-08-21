import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
function ConsoleDetail() {
  const [theConsole, SettheConsole] = useState(null)
  const { id } = useParams();
  const consoles = useSelector((state) => state.consoles.consoles);

  useEffect(() => {
    consoles.forEach(element => {
      if (element.id === parseInt(id)) {
        SettheConsole(element);
      }
    });
    console.log(consoles);
  }, [id, consoles])

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {theConsole ? (
        <div className="flex w-full justify-between items-center">
          <div className="w-3/5">
            <img src={theConsole.photo} alt={theConsole.name} className="w-full h-auto" />
          </div>
          <div className="flex flex-col w-2/5 px-6">
            <div>
              <p className="text-lg font-bold p-1">{theConsole.name}</p>
              <p className=" text-xs p-1">{theConsole.description}</p>
              <p className="text-md bg-secondary p-1">Purchase Price: {theConsole.purchase_price} $</p>
              <p className="text-md p-1">Rental Price: {theConsole.rental_price} $</p>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
              <button
                className="w-2/5 bg-secondary text-primary rounded-lg p-2 mt-3">Reserve</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">Console not found</div>
      )}
    </div>
  );
}


export default ConsoleDetail;
