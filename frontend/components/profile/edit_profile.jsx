import React from 'react';

class EditProfile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: this.props.user.username,
      password: ""
    }
  }

  componentDidMount(){
  }

  render(){
    return(
      <p>HEY</p>
    )
  }

}

export default EditProfile;
