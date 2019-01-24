import React from 'react';
import { CircleLoader } from 'react-spinners';

class Photo extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      body: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderCount = this.renderCount.bind(this);
    this.renderDeleteButton = this.renderDeleteButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchImage(this.props.imageId)
  }

  componentDidUpdate(prevProps){
      if (prevProps.imageId !== this.props.imageId) {
        this.props.fetchImage(this.props.imageId)
    }
  }

  componentWillUnmount(){
    this.props.deleteImages()
  }

  renderCaption(image) {
    return (
      <div className="caption-div">
        <label>
          <a className="caption-username-link" href={`#/users/${image.userId}`}>
            {image.username}
          </a>
          {image.body}
        </label>
      </div>
    )
  }

  renderHeart(image) {
    if (image.likerIds && image.likerIds.includes(this.props.currentUserId)) {
      return (
        <img
          className="heart"
          src={window.images.full_heart}
          onClick={() => this.props.deleteLike(image.id)}
        />
      )
    }

    return (
      <img
        className="heart"
        src={window.images.empty_heart}
        onClick={() => this.props.createLike({ image_id: image.id })}
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

  renderDeleteButton(image){
    return (
      <img
        className="trash"
        src={window.images.trash}
        onClick={() => this.props.deleteImage(image.id)
          .then(this.props.closeModal())}
      />
    )
  }

  renderRemoveIcon(comment) {
    if (comment.userId === this.props.currentUserId) {
      return (
        <img
          className="remove-icon"
          src={window.images.remove_comment}
          onClick={() => this.props.deleteComment(comment.id)}
        />
      )
    }

    return (
      null
    )
  }

  renderComments(image) {
    return (
      Object.values(image.comments).map(comment => {
        return (
          <div key={`comments-${comment.id}`} className="comment-and-username">
            <label onClick={() => this.props.closeModal()}>
              <a 
              className="comment-username-link" 
              href={`#/users/${comment.userId}`}
              >
                {comment.username}
              </a>
              {comment.body}
            </label>
            {this.renderRemoveIcon(comment)}
          </div>
        )
      })
    )
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createComment(
      {
        body: this.state.body,
        image_id: this.state.imageId
      }
    ).then(this.setState({ body: "" }))
  }

  update(field, imageId) {
    return e => this.setState({ [field]: e.currentTarget.value, imageId: imageId })
  };

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
            {this.props.user.id === this.props.currentUserId ? 
              this.renderDeleteButton(this.props.image) :
              null
            }
          </li>
          <div className="photo-divider"></div>
          <li className="caption-and-comment">
            <label>
              {this.props.image.body.length > 0 ?
                this.renderCaption(this.props.image) :
                null
              }
            </label>
            <ul className="comments">
              {this.props.image.comments ?
                this.renderComments(this.props.image) :
                null
              }
            </ul>
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
                this.renderCount(this.props.image.likerIds.length) : null
              }
            </label>
            <label className="image-created-at">
              {this.props.image.createdAt.toUpperCase()}
            </label>
            <form
              className="comment-form"
              onSubmit={this.handleSubmit}
            >
              <div className="comment-divider"></div>
              <input
                type="text"
                className="comment-input"
                placeholder="Add a comment..."
                value={this.state.body}
                onChange={this.update("body", this.props.image.id)}
              />
            </form>
          </li>
        </ul>
      </div>
    )
  }
}

export default Photo;
