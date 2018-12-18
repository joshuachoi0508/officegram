import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_USER,
  RECEIVE_ALL_USERS
} from '../actions/user_actions';
import {
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
 } from '../actions/follow_actions'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch(action.type){
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
    default:
      return state;
  }
};

export default usersReducer;
