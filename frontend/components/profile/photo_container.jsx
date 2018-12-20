import { connect } from 'react-redux';
import React from 'react';
import Photo from './photo';
import { fetchImage } from '../../actions/image_actions';

const mapStateToProps = (state, ownProps) => {
  const image = state.entities.images[ownProps.match.params.imageId];

  return ({
    imageId: ownProps.match.params.imageId,
    image: image
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchImage: imageId => dispatch(fetchImage(imageId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
