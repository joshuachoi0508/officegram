import React from 'react';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.renderImages = this.renderImages.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.userId)

    //this is completely ignored
    debugger
    if (this.props.userId === this.props.session.id) {
      this.props.history.push("/profile")
    }
  }

  renderImages(){
    let posts = this.props.images.map(image => {
      return(
        <li key={`image-${image.id}`} className="image-container">
          <img
            className="image"
            key={`image-${image.id}`}
            src={image.image_url} />
          <ul className="image-stats">
            <li className="image-stats-info">LIKE</li>
            <li className="image-stats-info">COMMENTS</li>
          </ul>
        </li>
      )
    })

    return posts.reverse();
  }

  render(){
    if (!this.props.user){
      return(
        <p>loading...</p>
      )
    }

    return(
      <div className="profile">
        <div className="user-profile">
          <ul className="profile-info">
            <li className="profile-pic-container">
              <img className="profile-pic" src={window.images.profile_pic} />
            </li>
            <li className="profile-info-container">
              <div className="name-and-edit-container">
                <p className="username">{this.props.user.username}</p>
                <button className="edit-profile-button">Follow</button>
                <img
                  className="logout-button"
                  src={window.images.logout_logo}
                  onClick={() => this.props.logout()}
                  />
              </div>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <ul className="profile-images">
          {this.renderImages()}
        </ul>
      </div>
    )
  }

}

export default Profile;