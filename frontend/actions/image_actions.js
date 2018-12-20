import * as ImageAPIUtil from '../util/image_api_util';

export const RECEIVE_ALL_IMAGES = 'RECEIVE_ALL_IMAGES';
export const RECEIVE_ONE_IMAGE = 'RECEIVE_ONE_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE'
export const RECEIVE_IMAGE_ERRORS = 'RECEIVE_IMAGE_ERRORS';

const receiveAllImages = images => ({
  type: RECEIVE_ALL_IMAGES,
  images: images
});

const receiveOneImage = image => ({
  type: RECEIVE_ONE_IMAGE,
  image: image
});

const removeImage = imageId => ({
  type: REMOVE_IMAGE,
  imageId: imageId
});

const receiveImageErrors = errors => ({
  type: RECEIVE_IMAGE_ERRORS,
  errors: errors
});

export const fetchImages = offset => dispatch => (
  ImageAPIUtil.fetchImages(offset)
    .then(images => dispatch(receiveAllImages(images)))
);

export const fetchImage = imageId => dispatch => {
  ImageAPIUtil.fetchImage(imageId)
    .then(image => dispatch(receiveOneImage(image)))
};

export const createImage = image => dispatch => (
  ImageAPIUtil.createImage(image)
);

export const updateImage = image => dispatch => (
  ImageAPIUtil.updateImage(image)
    .then(image => dispatch(receiveOneImage(image)),
          errors => dispatch(receiveImageErrors(errors.responseJSON))
  )
);

export const deleteImage = imageId => dispatch => (
  ImageAPIUtil.deleteImage(imageId)
    .then(imageId => dispatch(removeImage(imageId)))
);

export const removeErrors = () => dispatch => (
  dispatch(receiveImageErrors([]))
);
