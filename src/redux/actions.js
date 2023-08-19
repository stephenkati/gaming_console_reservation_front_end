import customApi from '../utils/axios';
export const addConsole = (consoleData) => {
  return async (dispatch) => {
    try {
      const response = await customApi.post('/api/v1/consoles', { console: consoleData });
      dispatch({
        type: 'ADD_CONSOLE',
        payload: response.data.data,
      });
    } catch (error) {
      console.error('Error adding console:', error);
    }
  };
};
