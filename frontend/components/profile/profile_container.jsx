import { connect } from 'react-redux';
import React from 'react';
import Profile from './profile';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

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
    logout: () => dispatch(logout()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: options => dispatch(openModal("photo", options)),
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
