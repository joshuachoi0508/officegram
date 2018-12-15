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

  update(){
    return e => this.setState({
      [body]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image[body]', this.state.body);
    if (this.state.imageFile) {
      formData.append('image[image]', this.state.imageFile);
    }

    this.props.createImage(formData).then(() => this.props.history.push("/profile"))
  }

  render(){
    return(
      <div className="upload">
        <p className='upload-page-title'>Upload Your Image</p>
        <form className="upload-form" onSubmit={this.handleSubmit}>
          <div className="example-photo">
            <img
              id='image-preview'
              src={ this.state.imageUrl }
              />
          </div>
          <textarea
            value={this.state.body}
            onChange={this.update}
            />
          <input
            className="upload-file-selector"
            type="file"
            id="file-selector"
            onChange={this.handleFile}
            />
          <label
            className="upload-file-selector-label"
            htmlFor="file-selector"
            >Choose a file
          </label>
          <input
            className="upload-submit"
            type="submit"
            value="Submit"
            />
        </form>
      </div>
    )
  }

}

export default Upload;
