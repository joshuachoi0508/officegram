import React from 'react';

class Upload extends React.Component {
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

    this.props.createImage(formData).then(this.props.history.push("/profile"))
  }

  render(){
    return(
      <div className="profile">
        <p>HELLO THIS IS UPLOAD</p>
        <form onSubmit={this.handleSubmit}>
          <input className="upload-file" type="file" onChange={this.handleFile} />
          <input type="submit" value="submit" />

          <img id='image-preview' src={ this.state.imageUrl } />
        </form>
      </div>
    )
  }

}

export default Upload;
