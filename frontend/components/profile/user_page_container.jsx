import { connect } from 'react-redux';
import React from 'react';
import User from './user';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id];

  return ({
    userId: ownProps.match.params.id,
    user: user
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
