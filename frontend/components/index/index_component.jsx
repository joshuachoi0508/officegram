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
          <img
            className="image"
            key={`image-${image.id}`}
            src={image.imageUrl} />
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
