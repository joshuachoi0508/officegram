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
    return(
      <div className="profile">
        <div className="user-profile">
          <ul className="profile-info">
            <li>
              <p>profile-pic</p>
            </li>
            <li>
              <p>info</p>
            </li>
          </ul>
        </div>
        <ul className="profile-images">
          {this.renderImages()}
        </ul>
      </div>
    )
  }

}

export default Profile;
