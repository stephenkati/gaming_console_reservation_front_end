import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { delConsole, deleteConsole, getConsoles } from '../../redux/consoleSlice';

const DeleteItem = () => {
  const dispatch = useDispatch();
  const consoles = useSelector((state) => state.consoles.consoles);

  useEffect(() => {
    dispatch(getConsoles());
  }, [dispatch]);

  const handleDelete = async (console_id) => {
    await dispatch(deleteConsole(console_id));
    await dispatch(delConsole(console_id));
  };

  return (
    <div className="flex flex-col w-full items-center ">
      <h1 className="tracking-widest font-bold p-4">DELETE CONSOLE</h1>
      <table className="w-full max-w-lg">
        <thead className="w-full m-auto">
          <tr className="bg-gray-200">
            <th className="py-2 border-r border-gray-500">Console</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
         {
            consoles.map((console) => (
              <tr key={console.id} className="w-full text-center even:bg-gray-100 py-2">
                <td className="py-1 border-r border-gray-500">{console.name}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDelete(console.id)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-1 my-1 "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
};

export default DeleteItem;
