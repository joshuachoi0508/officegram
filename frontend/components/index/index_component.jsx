import React from 'react';
import { CircleLoader } from 'react-spinners';

class Index extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loading: false,
      offset: 0,
      body: "",
      imageId: 0
    }

   window.addEventListener('scroll', () => {
     const { innerHeight } = window;
     const { scrollTop, offsetHeight } = document.documentElement;

     if (innerHeight + scrollTop > offsetHeight - 1) {
       this.setState(state => ({
         offset: state.offset + 5
       }));
       this.props.fetchImages(this.state.offset);
     }
   });

    this.renderImages = this.renderImages.bind(this);
    this.renderCount = this.renderCount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderRemoveIcon = this.renderRemoveIcon.bind(this);
    this.renderCaption = this.renderCaption.bind(this);
  }

  componentDidMount(){
    this.props.deleteImages()
    this.setState({loading: true})
    this.props.fetchImages(this.state.offset)
      .then(() => this.setState({loading: false}))
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.createComment(
      {
        body: this.state.body,
        image_id: this.state.imageId
      }
    ).then(this.setState({body: ""}))
  }

  update(field, imageId){
    return e => this.setState({[field]: e.currentTarget.value, imageId: imageId})
  };

  renderImages(){
    let posts = this.props.indexImages.map(image => {
      return(
        <li key={`image-${image.id}`} className="index-image-container">
          <ul className="info-and-image">
            <li className="index-image-info">
              <a href={`#/users/${image.userId}`}>
                <img
                  className="index-image-profile-pic"
                  src={image.userPhotoUrl}
                />
              </a>
              <a
                href={`#/users/${image.userId}`}
                className="index-image-link"
                >
                <p className="index-image-username">{image.username}</p>
              </a>
            </li>
            <li>
              <img
                className="index-image"
                key={`image-${image.id}`}
                src={image.imageUrl}
              />
            </li>
            <li className="index-image-info-bottom">
              <label className="like-comment-logo">
                {this.renderHeart(image)}
                <img
                  className="comment-logo"
                  src={window.images.comment_logo}
                />
              </label>
              { image.likerIds ?
                this.renderCount(image.likerIds.length) : null
              }
              <label>
                {image.body.length > 0 ? 
                  this.renderCaption(image) :
                  null
                }
              </label>
              <label className="comments">
                {image.comments ?
                  this.renderComments(image) :
                  null
                }
              </label>
              <label className="index-image-created-at">
                { image.createdAt.toUpperCase() }
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
                  onChange={this.update("body", image.id)}
                  />
              </form>
            </li>
          </ul>
        </li>
      )
    })

    return posts.reverse();
  }

  renderCaption(image){
    return (
      <div className="caption-div">
        <a className="caption-username-link" href={`#/users/${image.userId}`}>
          <p className="caption-username">
            {image.username}
          </p>
        </a>
        <p className="caption-body">
          {image.body}
        </p>
      </div>
    )
  }

  renderComments(image){
    return(
      Object.values(image.comments).map(comment => {
        return (
          <div key={`comments-${comment.id}`} className="comment-and-username">
            <label>
            <a className="comment-username-link" href={`#/users/${comment.userId}`}>
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

  renderCount(length) {
    if (length === 0) {
      return (
        <p></p>
      )
    } else if (length === 1) {
      return (
        <p className="index-like-count">{length} like</p>
      )
    } else {
      return (
        <p className="index-like-count">{length} likes</p>
      )
    }
  }

  renderHeart(image){
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
        onClick={() => this.props.createLike({image_id: image.id})}
      />
      )
  }

  render(){
    if (this.state.loading) {
      return (
        <div className='circle-loader-container'>
          <CircleLoader />
        </div>
      )
    }

    return(
      <div className="index">
        <ul className="index-images">
          {this.renderImages()}
        </ul>
      </div>
    )
  }

}

export default Index;
