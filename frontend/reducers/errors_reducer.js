import sessionErrorsReducer from './session_errors_reducer';
import imageErrorsReducer from './image_errors_reducer';
import { combineReducers } from 'redux';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  image: imageErrorsReducer
});

export default errorsReducer;
