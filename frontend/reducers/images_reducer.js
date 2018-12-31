import {
  RECEIVE_ALL_IMAGES,
  RECEIVE_ONE_IMAGE,
  REMOVE_IMAGE,
  REMOVE_IMAGES
} from '../actions/image_actions';

import {
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_actions';

import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

const imagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_COMMENT:
      if (newState[action.comment.imageId].comments) {
        newState[action.comment.imageId].comments[action.comment.id] = action.comment;
      } else {
        newState[action.comment.imageId].comments = {};
        newState[action.comment.imageId].comments[action.comment.id] = action.comment;
      }
      return newState
    case REMOVE_COMMENT:
      delete newState[action.comment.imageId].comments[action.comment.id]
      return newState
    case RECEIVE_LIKE:
      newState[action.like.imageId].likerIds.push(action.like.userId);
      return newState;
    case REMOVE_LIKE:
      newState[action.like.imageId].likerIds = newState[action.like.imageId].likerIds.filter(id => id !== action.like.userId);
      return newState;
    case RECEIVE_ALL_IMAGES:
      return Object.assign({}, oldState, action.images);
    case RECEIVE_ONE_IMAGE:
      return Object.assign({}, oldState, {[action.image.id]: action.image});
    case REMOVE_IMAGE:
      delete newState[action.image.id];
      return newState;
    case REMOVE_IMAGES:
      return {};
    default:
      return oldState;
  }
};

export default imagesReducer;
