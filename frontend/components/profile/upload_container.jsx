import { connect } from 'react-redux';
import React from 'react';
import Upload from './upload';
import { createImage } from '../../actions/image_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[state.session.id];
  return ({
    user: user,
    errors: state.errors.image
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    createImage: image => dispatch(createImage(image))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
