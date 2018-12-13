import * as ImageAPIUtil from '../util/image_api_util';

export const RECEIVE_ALL_IMAGES = 'RECEIVE_ALL_IMAGES';
export const RECEIVE_ONE_IMAGE = 'RECEIVE_ONE_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE'

const receiveAllImages = images => ({
  action: RECEIVE_ALL_IMAGES,
  images: images
});

const receiveOneImage = image => ({
  action: RECEIVE_ONE_IMAGE,
  image: image
});

const removeImage = imageId => ({
  action: REMOVE_IMAGE,
  imageId: imageId
})

export const fetchImages = () => dispatch => (
  ImageAPIUtil.fetchImages()
    .then(images => dispatch(receiveAllImages(images)))
);

export const fetchImage = imageId => dispatch => (
  ImageAPIUtil.fetchImage(imageId)
    .then(image => dispatch(receiveOneImage(image)))
);

export const createImage = image => dispatch => (
  ImageAPIUtil.createImage(image)
    .then(image => dispatch(receiveOneImage(image)))
);

export const updateImage = image => dispatch => (
  ImageAPIUtil.updateImage(image)
    .then(image => dispatch(receiveOneImage(image)))
);

export const deleteImage = imageId => dispatch => (
  ImageAPIUtil.deleteImage(imageId)
    .then(imageId => dispatch(removeImage(imageId)))
)
