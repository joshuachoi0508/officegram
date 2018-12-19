import { connect } from 'react-redux';
import React from 'react';
import Index from './index_component';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[state.session.id]

  debugger;

  return ({
    user: user,
    images: user.followingImages
  })
};

const mapDispatchToProps = dispatch => {
  return ({
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
