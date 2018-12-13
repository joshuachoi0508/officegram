export const fetchImages = () => ({
  $.ajax({
    method: 'GET',
    url: 'api/images'
  })
});

export const fetchImage = imageId => ({
  $.ajax({
    method: 'GET',
    url: `api/images/${imageId}`
  })
});

export const createImage = image => ({
  $.ajax({
    method: 'POST',
    url: 'api/images',
    data: { image }
  })
});

export const updateImage = image => ({
  $.ajax({
    method: 'PATCH',
    url: `api/images/${image.id}`,
    data: { image }
  })
});

export const deleteImage = imageId => ({
  $.ajax({
    method: 'DELETE',
    url: `api/images/${imageId}`,
  })
});

export const fetchUserImages = userId => ({
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/images`
  })
});
