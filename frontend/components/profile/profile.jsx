import React from 'react';
import { CircleLoader } from 'react-spinners';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.renderImages = this.renderImages.bind(this);
  }

  renderImages(){
    let posts = this.props.images.map(image => {
      return(
        <li key={`image-${image.id}`} className="image-container">
          <img
            className="image"
            key={`image-${image.id}`}
            src={image.imageUrl} />
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
    return(
      <div className="profile">
        <div className="user-profile">
          <ul className="profile-info">
            <li className="profile-pic-container">
              <img className="profile-pic" src={this.props.user.photoUrl} />
            </li>
            <li className="profile-info-container">
              <div className="name-and-edit-container">
                <p className="username">{this.props.user.username}</p>
                  <a href="#/profile/edit">
                    <button className="edit-profile-button">Edit Profile</button>
                  </a>
                <img
                  className="logout-button"
                  src={window.images.logout_logo}
                  onClick={() => this.props.logout()}
                  />
              </div>
              <div className="post-follow-follower">
                <p className="count">{this.props.images.length}</p>
                <p className="category">posts</p>
                <p className="count">0</p>
                <p className="category">followers</p>
                <p className="count">0</p>
                <p className="category">following</p>
              </div>
              <div className="bio-container">
                <p className="bio">{this.props.user.username}&#39;s Bio</p>
                <p className="bio-element">{this.props.user.bio}</p>
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
