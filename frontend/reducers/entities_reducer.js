import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import imagesReducer from './images_reducer';
import followsReducer from './follows_reducer';
import searchedUsersReducer from './searched_users_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  images: imagesReducer,
  follows: followsReducer,
  searchedUsersReducer: searchedUsersReducer
});

export default entitiesReducer;
