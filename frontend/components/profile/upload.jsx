import React from 'react';
import { CircleLoader } from 'react-spinners';

class Upload extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: "",
      imageFile: null,
      imageUrl: "",
      uploadErrors: [],
      loading: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.update = this.update.bind(this);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const fileExtension = file.name.split('.').pop();
      const extensions = ['jpg', 'png', 'JPG', 'PNG'];

      if (extensions.includes(fileExtension)) {
        this.setState({imageFile: file, imageUrl: reader.result, uploadErrors: [] });
      } else {
        this.setState({uploadErrors: ['Please select a jpg or png file']})
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  update(){
    return (e) => {
      this.setState({ body: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('image[body]', this.state.body);
    if (this.state.imageFile) {
      formData.append('image[image]', this.state.imageFile);
    }

    this.setState({loading: true})
    this.props.createImage(formData)
      .then(() => this.props.fetchUser(this.props.user.id))
      .then(() => this.props.history.push("/profile"))
  }

  renderErrors(){
    return(
      <ul className="error-list">
        <li className="submit-errors">
          {this.state.uploadErrors}
        </li>
      </ul>
    );
  }

  render(){
    if (this.state.loading) {
      return (
        <div className='circle-loader-container'>
          <CircleLoader />
        </div>
      )
    }

    return(
      <div className="upload">
        <p className='upload-page-title'>Upload Your Image</p>
        <form className="upload-form" onSubmit={this.handleSubmit}>
          <div className="example-photo">
            <img
              id='image-preview'
              src={this.state.imageUrl}
              />
          </div>
          <textarea
            className="body-input"
            value={this.state.value}
            onChange={this.update()}
            maxLength="300"
            placeholder="Caption"
            />
          <input
            className="upload-file-selector"
            type="file"
            id="file-selector"
            onChange={this.handleFile}
            required
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
          {this.renderErrors()}
        </form>
      </div>
    )
  }

}

export default Upload;
