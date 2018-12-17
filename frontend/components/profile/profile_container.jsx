import { connect } from 'react-redux';
import React from 'react';
import Profile from './profile';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[state.session.id];
  let images = [];
  if (user.images) {
    images = Object.values(user.images);
  }

  return ({
    user: user,
    images: images
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout())
    // fetchUser: userId => dispatch(fetchUser(userId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
