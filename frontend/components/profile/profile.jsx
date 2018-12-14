import React from 'react';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.renderImages = this.renderImages.bind(this);
  }

  componentDidMount(){
    this.props.fetchUserImages(this.props.user.id);
  }

  renderImages(){
    return this.props.images.map(image => {
      return(
        <li key={`image-${image.id}`} className="image-container">
          <img
            className="image"
            key={`image-${image.id}`}
            src={image.image_url} />
        </li>
      )
    })
  }

  render(){
    return(
      <div className="profile">
        <div className="user-profile">
          <p>THIS IS PROFILE INFO TAB</p>
        </div>
          <a href="#/upload">upload</a>
        <ul className="profile-images">
          {this.renderImages()}
        </ul>
      </div>
    )
  }

}

export default Profile;
