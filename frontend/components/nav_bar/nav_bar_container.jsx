import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { fetchAllUsers, discardSearchedUsers } from '../../actions/user_actions'

const mapStateToProps = (state) => {
    return ({
        searchedUsers: Object.values(state.entities.searchedUsersReducer)
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchAllUsers: (username) => dispatch(fetchAllUsers(username)),
        discardSearchedUsers: () => dispatch(discardSearchedUsers())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
