import { connect } from 'react-redux';
import React from 'react';
import User from './user';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id];
  let images = [];

  if (user && user.images) {
    images = Object.values(user.images);
  }

  return ({
    userId: ownProps.match.params.id,
    session: state.session,
    user: user,
    images: images
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
