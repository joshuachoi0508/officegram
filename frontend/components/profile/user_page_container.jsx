import { connect } from 'react-redux';
import React from 'react';
import User from './user';
import { fetchUser } from '../../actions/user_actions';
import { createFollow } from '../../actions/follow_actions';
import { deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id];
  let following = false;

  let images = [];

  if (user && user.images) {
    images = Object.values(user.images);
  }

  if (user && user.followers.length > 0) {
    following = user.followers.map(obj => obj.id).includes(state.session.id);
  }

  return ({
    userId: ownProps.match.params.id,
    session: state.session,
    user: user,
    images: images,
    following: following
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: followershipId => dispatch(deleteFollow(followershipId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
