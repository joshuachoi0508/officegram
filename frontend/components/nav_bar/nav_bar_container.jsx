import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { updateUser } from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
    return ({
    })
};

const mapDispatchToProps = dispatch => {
    return ({
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
