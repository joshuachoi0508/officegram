import { connect } from 'react-redux';
import React from 'react';
import Profile from './profile';
import { fetchUserImages } from '../../actions/image_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[state.session.id];
  const images = Object.values(state.entities.images);
  return ({
    user: user,
    images: images
  })
  debugger;
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchUserImages: userId => dispatch(fetchUserImages(userId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
