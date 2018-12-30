import { connect } from 'react-redux';
import React from 'react';
import Index from './index_component';
import { fetchImages } from '../../actions/image_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let indexImages = [];
  let comments = [];

  if (state.entities.images) {
    indexImages = Object.values(state.entities.images);
  }

  return ({
    currentUserId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    indexImages: indexImages,
    comments: comments
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchImages: offset => dispatch(fetchImages(offset)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: (image_id, user_id) => dispatch(deleteLike(image_id, user_id)),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
