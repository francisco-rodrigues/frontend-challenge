import { createStore } from 'redux';

const initialState = {
  searchTerm: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'EXAMPLE2':
      return { ...state };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
