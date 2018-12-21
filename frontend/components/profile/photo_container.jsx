import { connect } from 'react-redux';
import React from 'react';
import Photo from './photo';
import { fetchImage } from '../../actions/image_actions';

const mapStateToProps = (state, ownProps) => {
  const image = state.entities.images[ownProps.options.imageId];
  const user = state.entities.users[ownProps.options.userId];

  return ({
    imageId: ownProps.options.imageId,
    image: image,
    user: user
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchImage: imageId => dispatch(fetchImage(imageId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
