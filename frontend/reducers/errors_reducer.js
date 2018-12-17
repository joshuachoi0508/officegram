import sessionErrorsReducer from './session_errors_reducer';
import imageErrorsReducer from './image_errors_reducer';
import { combineReducers } from 'redux';
import userErrorsReducer from './user_errors_reducer'

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  image: imageErrorsReducer,
  user: userErrorsReducer
});

export default errorsReducer;
