import { connect } from 'react-redux';
import React from 'react';
import Photo from './photo';
import { fetchImage, deleteImages, deleteImage } from '../../actions/image_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const image = state.entities.images[ownProps.options.imageId];
  const user = state.entities.users[ownProps.options.userId];

  return ({
    imageId: ownProps.options.imageId,
    image: image,
    user: user,
    currentUserId: state.session.id,
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchImage: imageId => dispatch(fetchImage(imageId)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: (image_id, user_id) => dispatch(deleteLike(image_id, user_id)),
    deleteImages: () => dispatch(deleteImages()),
    deleteImage: imageId => dispatch(deleteImage(imageId)),
    closeModal: () => dispatch(closeModal()),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
