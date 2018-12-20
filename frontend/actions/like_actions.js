import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like: like
});

const removeLike = like => ({
  type: REMOVE_LIKE,
  like: like
});

export const createLike = like => dispatch => (
  LikeAPIUtil.createLike(like)
    .then(like => dispatch(receiveLike(like)))
);

export const deleteLike = imageId => dispatch => (
  LikeAPIUtil.deleteLike(imageId)
    .then(like => dispatch(removeLike(like)))
);
