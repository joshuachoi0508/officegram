import {
  RECEIVE_ALL_IMAGES,
  RECEIVE_ONE_IMAGE,
  REMOVE_IMAGE
} from '../actions/image_actions';
import {
  RECEIVE_LIKE,
  DELETE_LIKE
} from '../actions/like_actions';

const imagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_LIKE:
      nextState[action.like.imageId].likerIds.push(action.like.userId);
      return nextState;
    case REMOVE_LIKE:
      nextState[action.like.imageId] = nextState[action.like.imageId].likerIds.filter(id => id !== action.like.userId)
      return nextState;
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
