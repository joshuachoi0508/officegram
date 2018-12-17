import React from 'react';

class EditProfile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.props.user.id,
      username: this.props.user.username,
      bio: this.props.user.bio,
      photoFile: null,
      photoUrl: this.props.user.photoUrl
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.update = this.update.bind(this);
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  };

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }


  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('user[bio]', this.state.bio);
    formData.append('user[username]', this.state.username);
    if (this.state.photoFile) {
      formData.append('user[photo]', this.state.photoFile);
    }

    this.props.updateUser(formData).then(() => this.props.history.push("/profile"))
  }

  renderErrors(){
    return(
      <ul className="edit-error-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="edit-submit-errors">
            { error }
          </li>
        ))}
      </ul>
    );
  }


  render(){
    return(
      <div className="edit-profile">
        <div className="edit-container">
            <form className="edit-form" onSubmit={this.handleSubmit}>
              <input
                id="new-profile-selector"
                type="file"
                onChange={this.handleFile}
                />
              <label
                htmlFor="new-profile-selector"
                className="new-profile-selector-label"
                >
                <img
                  id='edit-image-preview'
                  src={this.state.photoUrl}
                  />
                {this.renderExamplePhoto}
              </label>
              <div className="edit-input-boxes">
                <label className="username-label">
                  <p className="edit-username">Username</p>
                  <input
                    type="text"
                    className="edit-username-input"
                    value={this.state.username}
                    onChange={this.update("username")}
                    />
                </label>
                <label className="bio-label">
                  <p className="edit-bio">Bio</p>
                  <textarea
                    className="bio-input"
                    value={this.state.bio}
                    onChange={this.update("bio")}
                    ></textarea>
                </label>
                <input type="submit" className="edit-button" value="Submit" />
                {this.renderErrors()}
              </div>
          </form>
        </div>
      </div>
    )
  }

}

export default EditProfile;
