import React from 'react';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: "",
      photoFile: null,
      imageUrl: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image[body]', this.state.body);
    if (this.state.photoFile) {

      formData.append('image[image_url]', this.state.photoFile);
    }

    this.props.createImage(formData)
  }

  render(){
    return(
      <div className="profile">
        <p>HELLO THIS IS PROFILE</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input className="upload-file" type="file" onChange={e => this.handleFile(e)} />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }

}

export default Profile;
