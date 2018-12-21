import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import imagesReducer from './images_reducer';
import followsReducer from './follows_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  images: imagesReducer,
  follows: followsReducer
});

export default entitiesReducer;
