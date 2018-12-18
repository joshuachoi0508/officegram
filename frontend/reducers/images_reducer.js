import {
  RECEIVE_ALL_IMAGES,
  RECEIVE_ONE_IMAGE,
  REMOVE_IMAGE
} from '../actions/image_actions';

const imagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_ALL_IMAGES:
      return Object.assign({}, action.images);
    case RECEIVE_ONE_IMAGE:
      return Object.assign({}, oldState, {[action.image.id]: action.image});
    case REMOVE_IMAGE:
      let newState = Object.assign({}, oldState);
      delete newState[action.imageId];
      return newState;
    default:
      return oldState;
  }
};

export default imagesReducer;
