import React from 'react';
import { Link } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';

class User extends React.Component {
  constructor(props){
    super(props);

    this.renderImages = this.renderImages.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.props.fetchUser(this.props.userId), 500)

    if (parseInt(this.props.userId) === this.props.session.id) {
      this.props.history.push("/profile")
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.userId !== this.props.userId) {
      setTimeout(() => this.props.fetchUser(this.props.userId), 500)

      if (parseInt(this.props.userId) === this.props.session.id) {
        this.props.history.push("/profile")
      }
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
            onClick={() => this.props.openModal({userId: this.props.userId, imageId: image.id})}
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
                COMMENT
              </label>
            </li>
          </ul>
        </li>
      )
    })

    return posts.reverse();
  }

  renderFollowButton() {
    if (this.props.following) {
      return (
        <button
          className="follow-button"
          onClick={() => this.handleClick("delete")}
          >unfollow
        </button>
      )
    }

    return (
      <button
        className="follow-button"
        onClick={() => this.handleClick("create")}
        >follow
      </button>
    )
  }


  handleClick(action) {
    if(action === "delete") {
      this.props.deleteFollow(this.props.userId)
        .then(() => this.props.fetchUser(this.props.userId))
    }

    if (action === "create") {
      this.props.createFollow({user_id: this.props.userId})
        .then(() => this.props.fetchUser(this.props.userId))
    }
  }

  render(){
    if (this.props.loading) {
      return(
        <div className='circle-loader-container'>
          <CircleLoader />
        </div>
      )
    }

    if (!this.props.user){
      return(
        <div className='circle-loader-container'>
          <CircleLoader />
        </div>
      )
    }

    return(
      <div className="profile">
        {this.props.modalForm}
        <div className="user-profile">
          <ul className="profile-info">
            <li className="profile-pic-container">
              <img className="profile-pic" src={this.props.user.photoUrl} />
            </li>
            <li className="profile-info-container">
              <div className="name-and-edit-container">
                <p className="username">{this.props.user.username}</p>
                {this.renderFollowButton()}
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

export default User;
