import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  render(){
    return(
      <div className="nav-bar">
        <ul className="nav-bar-items">
          <li className="left-nav-bar">
            <Link to="/">
              <img className="main-logo" src={window.images.main_logo} />
            </Link>
          </li>
          <li>
            <input type="text"
              placeholder="               &#128269; search"
              className="search-input"/
              >
          </li>
          <li className="right-nav-bar">
            <img className="profile-logo" src={window.images.profile_logo} />
          </li>
        </ul>
      </div>
    )
  }

}

export default NavBar;

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
