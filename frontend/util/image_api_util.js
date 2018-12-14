export const fetchImages = () => (
  $.ajax({
    method: 'GET',
    url: 'api/images'
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
    method: 'POST',
    url: 'api/images',
    data: { image }
  })
);

export const updateImage = image => (
  $.ajax({
    method: 'PATCH',
    url: `api/images/${image.id}`,
    data: { image }
  })
);

export const deleteImage = imageId => (
  $.ajax({
    method: 'DELETE',
    url: `api/images/${imageId}`,
  })
);

export const fetchUserImages = userId => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/images`
  })
);

// adding file
// he did this in app.jsx
//
// this.state = {
//   posts: []
// }
//
//
// form.jsx
//
// this.state = {
//   body: "",
//   userId: "",
//   photoFile: null,
//   imageUrl: ""
// }
//
// handleFile(e) {
//   const file = e.currentTarget.files[0];
//
//   const fileReader = new FileReader();
//   fileReader.onloadend = () = {
//     this.setState({
//       photoFile: file,
//       imageUrl: fileReader.result
//     });
//   }
//
//   if (file) {
//     fileReader.readAsDataURL(file);
//   }
// }
//
// handleSubmit(e) {
//   e.preventDefault();
//
//   const formData = new FormData();
//   formData.append('image[body]', this.state.body);
//   if (this.state.photoFile) {
//
//     formData.append('image[image_url]', this.state.photoFile);
//   }
//   $.ajax({
//     url: '/api/images',
//     method: 'POST',
//     data: formData,
//     contentType: false,
//     processData: false
//   });
// }
//
//
// <form onSubmit={this.handleSubmit.bind(this)}>
//   <input type="file"
//     onChange={this.handleFile.bind.(this)}
//   />
// </form>
