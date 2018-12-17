import React from 'react';

class EditProfile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: this.props.user.username,
      password: ""
    }
  }

  componentDidMount(){
  }

  render(){
    return(
      <div className="edit-profile">
        <div className="edit-container">
          <img className="profile-pic-edit" src={window.images.profile_pic} />
          <div className="edit-input-boxes">
            <label className="username-label">
              <p className="edit-username">Username</p>
              <input
                type="text"
                className="edit-username-input"
                />
            </label>
            <label className="password-label">
              <p className="edit-password">Password</p>
              <input
                type="Password"
                className="edit-password-input"
                />
            </label>
            <label className="bio-label">
              <p className="edit-bio">Bio</p>
              <textarea className="bio-input"></textarea>
            </label>
            <button className="edit-button">Submit</button>
          </div>
        </div>
      </div>
    )
  }

}

export default EditProfile;
