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
        <img src={this.props.image.imageUrl} />
      </div>
    )
  }
}

export default Photo;
