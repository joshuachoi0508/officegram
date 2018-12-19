import React from 'react';

class Index extends React.Component {
  constructor(props){
    super(props);

    this.renderImages = this.renderImages.bind(this);
  }

  componentDidMount(){
    this.props.fetchImages();
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
                  src={image.userPhotoUrl} />
              </a>
              <a
                href={`#/users/${image.userId}`}
                className="index-image-link"
                >
                <p className="index-image-username">{image.username}</p>
              </a>
            </li>
              <img
                className="index-image"
                key={`image-${image.id}`}
                src={image.imageUrl} />
          </ul>
        </li>
      )
    })

    return posts.reverse();
  }


  render(){
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
