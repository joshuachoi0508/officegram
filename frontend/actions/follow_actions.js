import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'FOLLOW'

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow: follow
});

const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow: follow
});

export const createFollow = follow => dispatch => (
  FollowAPIUtil.createFollow(follow)
    .then(follw => dispatch(receiveFollow(follow)))
);

const deleteFollow = followingId => dispatch => (
  FollowAPIUtil.deleteFollow(followingId)
    .then(follow => dispatch(removeFollow(follow)))
);
