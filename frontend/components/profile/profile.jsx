import React from 'react';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="profile">
        <p>THIS IS PROFILE</p>
        <a href="#/upload">upload</a>
        <ul>
          //images go here
        </ul>
      </div>
    )
  }

}

export default Profile;
