import { connect } from 'react-redux';
import React from 'react';
import Upload from './upload';
import { createImage } from '../../actions/image_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[state.session.id];

  return ({
    user: user,
    errors: state.errors.image
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    createImage: image => dispatch(createImage(image)),
    fetchUser: userId => dispatch(fetchUser(userId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
