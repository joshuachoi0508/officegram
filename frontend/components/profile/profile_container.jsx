import { connect } from 'react-redux';
import React from 'react';
import Profile from './profile';
// import { fetchImages } from '../../actions/image_actions';
import { fetchUser } from '../../actions/user_actions'
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[state.session.id];
  // const images = Object.values(state.entities.images);

  debugger;

  return ({
    user: user
    // images: images
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    // fetchImages: () => dispatch(fetchImages()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    logout: () => dispatch(logout())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
