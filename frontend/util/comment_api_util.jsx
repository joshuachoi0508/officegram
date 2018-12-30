export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: { comment }
  })
);

export const fetchComments = imageId => (
  $.ajax({
    method: 'GET',
    url: 'api/comments',
    data: { imageId }
  })
);

export const deleteComment = commentId => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${commentId}`
  })
);
