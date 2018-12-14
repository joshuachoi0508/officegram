import { connect } from 'react-redux';
import React from 'react';
import Profile from './profile';
import { createImage } from '../../actions/image_actions';

const mapStateToProps = (state, ownProps) => {
  return ({

  })
}

const mapDispatchToProps = dispatch => {
  return ({
    createImage: image => dispatch(createImage(image))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
