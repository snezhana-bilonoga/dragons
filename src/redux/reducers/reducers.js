import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { authReducer } from './authReducer';
import { favoritesReducer } from './favoritesReducer';
import { rocketsReducer } from './rocketsReducer';

const reducers = combineReducers({
  app: appReducer,
  rockets: rocketsReducer,
  auth: authReducer,
  favorites: favoritesReducer,
});

export default reducers;
