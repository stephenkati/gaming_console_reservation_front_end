import customApi from '../utils/axios';

export const addConsole = (consoleData) => {
  return async (dispatch) => {
    try {
      const response = await customApi.post('/api/v1/consoles', { console: consoleData });
      dispatch({
        type: 'ADD_CONSOLE_SUCCESS',
        payload: {
          data: response.data.data,
          message: 'Console added successfully.',
        },
      });
      alert('Console added successfully.')
    } catch (error) {
      const errorMessage = 'Error adding console: ' + error.message;

      dispatch({
        type: 'ADD_CONSOLE_ERROR',
        payload: {
          data: null,
          message: errorMessage,
        },
      });
      alert(errorMessage)
      console.error(errorMessage);
    }
  };
};
