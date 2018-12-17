import React from 'react';

class EditProfile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.props.user.id,
      username: this.props.user.username,
      password: "",
      bio: this.props.user.bio,
      photoFile: null,
      photoUrl: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
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
    formData.append('user[password]', this.state.password);
    if (this.state.imageFile) {
      formData.append('user[photo]', this.state.imageFile);
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
                  className="profile-pic-edit"
                  src={window.images.profile_pic}
                  />
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
                <label className="password-label">
                  <p className="edit-password">Password</p>
                  <input
                    type="Password"
                    className="edit-password-input"
                    onChange={this.update("password")}
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
