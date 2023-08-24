import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getConsoles } from '../../redux/consoleSlice';

const DeleteItem = () => {
  const dispatch = useDispatch();
  const consoles = useSelector((state) => state.consoles.consoles);

  useEffect(() => {
    dispatch(getConsoles());
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log("Delete-" + id);
  };

  return (
    <div>
      <h1>DELETE CONSOLE</h1>
      <table>
        <thead>
          <tr>
            <th>Console</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {
            consoles.map((console) => (
              <tr key={console.id}>
                <td>{console.name}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDelete(console.id)}
                    className="bg-red-500 hover:bg-red-600 rounded px-4 py-2 "
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
