import React from 'react';
import { CircleLoader } from 'react-spinners';

class Photo extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      like: null,
      count: null
    }

    this.renderCount = this.renderCount.bind(this);
  }

  componentDidMount() {
    this.props.fetchImage(this.props.imageId)
  }

  componentDidUpdate(prevProps){

      if (this.props.image && this.state.like === null) {
        this.setState({like: this.props.image.likerIds.includes(this.props.currentUserId)})
      }

      if (this.props.image && this.state.count === null) {
        this.setState({count: this.props.image.likerIds.length})
      }

      if (prevProps.imageId !== this.props.imageId) {
        this.props.fetchImage(this.props.imageId)
    }
  }

  componentWillUnmount(){
    this.props.deleteImages()
  }

  renderHeart(image){
    if (this.state.like === true) {
      return (
        <img
          className="heart"
          src={window.images.full_heart}
          onClick={() =>
            {
              this.props.deleteLike(image.id)
              this.setState({like: false, count: this.state.count - 1})
            }
          }
          />
        )
      }

    return (
      <img
        className="heart"
        src={window.images.empty_heart}
        onClick={() =>
          {
            this.props.createLike({image_id: image.id})
            this.setState({like: true, count: this.state.count + 1})
          }
      }
      />
      )
  }

  renderCount(length) {
    if (length === 0) {
      return (
        <p></p>
      )
    } else if (length === 1) {
      return (
        <p className="like-count-photo">{length} like</p>
      )
    } else {
      return (
        <p className="like-count-photo">{length} likes</p>
      )
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
          <div className="photo-divider"></div>
          <li className="likes-and-comment">
            <label className="like-comment-logo">
              {this.renderHeart(this.props.image)}
              <img
                className="comment-logo-photo"
                src={window.images.comment_logo}
                />
            </label>
            <label>
              { this.props.image.likerIds ?
                this.renderCount(this.state.count) : null
              }
            </label>
            <label className="image-created-at">
              {this.props.image.createdAt}
            </label>
          </li>
        </ul>
      </div>
    )
  }
}

export default Photo;
