import { 
    RECEIVE_ALL_USERS,
    REMOVE_SEARCHED_USERS
 } from '../actions/user_actions';

const searchedUsersReducer = (prevState = {}, action) => {
    Object.freeze(prevState);

    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return Object.assign({}, action.users);
        case REMOVE_SEARCHED_USERS:
            return {};
        default:
            return prevState;
    }
};

export default searchedUsersReducer;
