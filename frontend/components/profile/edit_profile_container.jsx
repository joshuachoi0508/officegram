import { connect } from 'react-redux';
import React from 'react';
import EditProfile from './edit_profile';
import { updateUser, fetchUser } from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[state.session.id]

  return ({
    user: user,
    errors: state.errors.user
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    updateUser: user => dispatch(updateUser(user))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
