import { connect } from 'react-redux';
import React from 'react';
import Profile from './profile';
import { fetchImages } from '../../actions/image_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id];
  const images = Object.values(state.entities.images);

  return ({
    user: user,
    images: images,
    userId: ownProps.match.params.id
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchImages: () => dispatch(fetchImages()),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
