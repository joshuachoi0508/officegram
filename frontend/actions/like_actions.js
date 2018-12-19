import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";

export const createLike = like => dispatch => (
  LikeAPIUtil.createLike(like)
    .then(like => dispatch(receiveLike(like)))
);

export const deleteLike = userId => dispatch => (
  LikeAPIUtil.deleteLike(userId)
    .then(like => dispatch(removeLike(like)))
);
