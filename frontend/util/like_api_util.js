export const createLike = like => (
  $.ajax({
    method: "POST",
    url: "api/likes",
    data: { like }
  })
);

export const deleteLike = userId => (
  $.ajax({
    method: "DELETE",
    url: `api/likes/${userId}`
  })
);
