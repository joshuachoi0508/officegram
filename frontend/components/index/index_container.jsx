import { connect } from 'react-redux';
import React from 'react';
import Index from './index_component';
import { fetchImages } from '../../actions/image_actions'

const mapStateToProps = (state, ownProps) => {
  let indexImages = [];

  if (state.entities.images) {
    indexImages = Object.values(state.entities.images)
  }

  return ({
    currentUserId: state.session.id,
    indexImages: indexImages
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchImages: () => dispatch(fetchImages())
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
