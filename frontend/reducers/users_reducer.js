import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_USER,
  RECEIVE_ALL_USERS
} from '../actions/user_actions';
import {
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
 } from '../actions/follow_actions'
import { REMOVE_IMAGE } from '../actions/image_actions';
import {
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_actions';
import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch(action.type){
    case RECEIVE_COMMENT:
      if (nextState[action.comment.receiverId]) {
        nextState[action.comment.receiverId].images[action.comment.imageId].comments.push(action.comment);
      }
      return nextState
    case REMOVE_COMMENT:
      if (nextState[action.comment.receiverId]) {
        nextState[action.comment.receiverId].images[action.comment.imageId].comments = nextState[action.comment.receiverId].images[action.comment.imageId].comments.filter(comment => comment.id !== action.comment.id)
      }
      return nextState
    case REMOVE_IMAGE:
      delete nextState[action.image.userId].images[action.image.id]
      return nextState;
    case RECEIVE_FOLLOW:
      nextState[action.follow.userId].followerIds.push(action.follow.followerId);
      nextState[action.follow.followerId].followingIds.push(action.follow.userId);
      return nextState;
    case REMOVE_FOLLOW:
      let followedUserFollowerIds = nextState[action.follow.userId].followerIds;
      let followingUserFollowingIds = nextState[action.follow.followerId].followingIds;

      nextState[action.follow.userId].followerIds = followedUserFollowerIds.filter(id => id !== action.follow.followerId);
      nextState[action.follow.followerId].followingIds = followingUserFollowingIds.filter(id => id !== action.follow.userId);

      return nextState;
    case RECEIVE_ALL_USERS:
      return Object.assign({}, action.users);
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user })
    case RECEIVE_LIKE:
      if (nextState[action.like.receiver.id]) {
        nextState[action.like.receiver.id].images[action.like.imageId].likerIds.push(action.like.userId)
      }
      return nextState;
    case REMOVE_LIKE:
      if (nextState[action.like.receiver.id]) {
        nextState[action.like.receiver.id].images[action.like.imageId].likerIds = nextState[action.like.receiver.id].images[action.like.imageId].likerIds.filter(likerId => likerId !== action.like.userId)
      }
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;
