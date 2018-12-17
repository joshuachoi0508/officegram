import React from 'react';

class EditProfile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.props.user.id,
      username: this.props.user.username,
      password: "",
      bio: this.props.user.bio
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.updateUser(this.state)
    // .then(() => this.props.history.push('/profile'))
  }

  render(){
    return(
      <div className="edit-profile">
        <div className="edit-container">
          <img className="profile-pic-edit" src={window.images.profile_pic} />
            <form onSubmit={this.handleSubmit}>
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
              </div>
          </form>
        </div>
      </div>
    )
  }

}

export default EditProfile;
