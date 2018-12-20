import React from 'react';
import { CircleLoader } from 'react-spinners';

class Index extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loading: false,
      offset: 0
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
  }

  componentDidMount(){
    this.setState({loading: true})
    this.props.fetchImages(this.state.offset)
      .then(() => this.setState({loading: false}))
  }

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
            </li>
          </ul>
        </li>
      )
    })

    return posts.reverse();
  }

  renderCount(length) {
    if (length === 0) {
      return (
        <p></p>
      )
    } else if (length === 1) {
      return (
        <p className="like-count">{length} like</p>
      )
    } else {
      return (
        <p className="like-count">{length} likes</p>
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
