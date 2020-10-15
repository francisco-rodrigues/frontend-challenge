import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  searchTerm: '',
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { persistor, store };
