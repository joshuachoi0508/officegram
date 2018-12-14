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
        <img
          key={`image-${image.id}`}
          src={image.image_url} />
      )
    })
  }

  render(){
    return(
      <div className="profile">
        <div className="user-profile">
        </div>
        <p>THIS IS PROFILE</p>
          <a href="#/upload">upload</a>
        <ul>
          {this.renderImages()}
        </ul>
      </div>
    )
  }

}

export default Profile;
