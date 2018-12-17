import React from 'react';
import { CircleLoader } from 'react-spinners';

class User extends React.Component {
  constructor(props){
    super(props);

    this.renderImages = this.renderImages.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.props.fetchUser(this.props.userId), 500)

    if (parseInt(this.props.userId) === this.props.session.id) {
      this.props.history.push("/profile")
    }

  }

  componentDidUpdate(prevProps){
    if (prevProps.userId !== this.props.userId) {
      this.props.fetchUser(this.props.userId)

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
        <div className='circle-loader-container'>
          <CircleLoader />
        </div>
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
                <button className="follow-button">Follow</button>
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

export default User;
