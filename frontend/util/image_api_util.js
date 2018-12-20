export const fetchImages = (offset = 0) => (
  $.ajax({
    method: 'GET',
    url: 'api/images',
    data: { offset }
  })
);

export const fetchImage = imageId => (
  $.ajax({
    method: 'GET',
    url: `api/images/${imageId}`
  })
);

export const createImage = image => (
  $.ajax({
    url: 'api/images',
    method: 'POST',
    data: image,
    contentType: false,
    processData: false
  })
);

export const updateImage = image => (
  $.ajax({
    method: 'PATCH',
    url: `api/images/${image.id}`,
    data: image,
    contentType: false,
    processData: false
  })
);

export const deleteImage = imageId => (
  $.ajax({
    method: 'DELETE',
    url: `api/images/${imageId}`,
  })
);
