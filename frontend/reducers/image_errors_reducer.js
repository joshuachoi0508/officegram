import { RECEIVE_IMAGE_ERRORS } from '../actions/session_actions';

export const imageErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_IMAGE_ERRORS:
      return action.errors;
    default:
      return oldState
  }
};

export default sessionErrorsReducer;
