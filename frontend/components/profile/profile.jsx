import React from 'react';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: "",
      imageFile: null,
      imageUrl: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image[body]', this.state.body);
    if (this.state.imageFile) {
      formData.append('image[image]', this.state.imageFile);
    }

    debugger;
    this.props.createImage(formData)
  }

  render(){
    return(
      <div className="profile">
        <p>HELLO THIS IS PROFILE</p>
        <form onSubmit={this.handleSubmit}>
          <input className="upload-file" type="file" onChange={this.handleFile} />
          <input type="submit" value="submit" />
          <img id='image-preview' src={ this.state.imageUrl } />
        </form>
      </div>
    )
  }

}

export default Profile;
