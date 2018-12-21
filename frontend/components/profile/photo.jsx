import React from 'react';
import { CircleLoader } from 'react-spinners';

class Photo extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchImage(this.props.imageId)
  }

  componentDidUpdate(prevProps){
      if (prevProps.imageId !== this.props.imageId) {
        this.props.fetchImage(this.props.imageId)
    }
  }

  render(){
    if (!this.props.image) {
      return (
      <div className='circle-loader-container'>
        <CircleLoader />
      </div>
      )
    }

    return(
      <div className="photo-component">
        <div className="photo-and-info">
          <img src={this.props.image.imageUrl} className="photo" />
        </div>
        <ul className="photo-info">
          <li className="photo-user-info">
            <a href={`#/users/${this.props.image.userId}`}>
              <img
                className="photo-profile-pic"
                src={this.props.user.photoUrl}
              />
            </a>
            <a href={`#/users/${this.props.image.userId}`} className="index-image-link">
              <p className="index-image-username">
                {this.props.user.username}
              </p>
            </a>
          </li>
          <div className="photo-divider"></div>
          <li className="caption-and-comment">
          </li>
        </ul>
      </div>
    )
  }
}

export default Photo;
