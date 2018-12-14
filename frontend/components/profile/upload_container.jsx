import { connect } from 'react-redux';
import React from 'react';
import Upload from './upload';
import { createImage } from '../../actions/image_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[state.session.id];
  return ({
    user: user
  })
}

const mapDispatchToProps = dispatch => {
  return ({

  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
