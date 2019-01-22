import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const REMOVE_SEARCHED_USERS = 'REMOVED_SEARCHED_USERS'

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user: user
});

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users: users
})

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors: errors
})

export const removeSearchedUsers = () => ({
  type: REMOVE_SEARCHED_USERS
})

export const fetchUser = userId => dispatch => (
  UserAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
);

export const fetchAllUsers = (username) => dispatch => (
  UserAPIUtil.fetchAllUsers(username)
    .then(users => dispatch(receiveAllUsers(users)))
);

export const discardSearchedUsers = () => dispatch => (
  dispatch(removeSearchedUsers())
);

export const updateUser = user => dispatch => (
  UserAPIUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)),
          errors => dispatch(receiveUserErrors(errors.responseJSON)))
);
