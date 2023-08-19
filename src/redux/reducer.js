const initialState = {
  consoles: [],
  message: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONSOLE_SUCCESS':
      return {
        ...state,
        consoles: [...state.consoles, action.payload.data],
        message: action.payload.message,
      };
    case 'ADD_CONSOLE_ERROR':
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default reducer;
