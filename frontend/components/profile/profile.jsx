import React from 'react';

class Profile extends React.Component {
  constructor(props){
    super(props)

    this.renderImages = this.renderImages.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0, 0);

    setTimeout(() => {
      window.addEventListener('click', this.closeDropdown)
    });
  }

  componentDidUpdate(prevProps){
    if (prevProps.user !== this.props.user) {
      this.props.fetchUser(this.props.userId)
    }
  }

  renderImages(){
    let posts = this.props.images.map(image => {
      return(
        <li key={`image-${image.id}`} className="image-container">
          <img
            className="image"
            key={`image-${image.id}`}
            src={image.imageUrl} />
          <ul
            className="image-stats"
            onClick={() => this.props.openModal({userId: this.props.user.id, imageId: image.id})}
            >
            <li className="image-stats-info">
              <label className="likes">
                <img
                  className="white-heart"
                  src={window.images.white_heart}
                  />
                <p className="like-count">{image.likerIds.length}</p>
              </label>
              <label className="comment">
                <img
                  className="white-comment"
                  src={window.images.white_comment}
                />
                <p className="comment-count">{image.comments.length}</p>
              </label>
            </li>
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
                <p className="count">{this.props.user.followerIds.length}</p>
                <p className="category">followers</p>
                <p className="count">{this.props.user.followingIds.length}</p>
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
