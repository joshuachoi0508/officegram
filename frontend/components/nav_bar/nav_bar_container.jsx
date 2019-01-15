import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { fetchAllUsers } from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
    return ({
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchAllUsers: () => dispatch(fetchAllUsers())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
