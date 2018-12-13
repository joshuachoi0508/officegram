import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  render(){
    return(
      <div className="nav-bar">
        <ul className="nav-bar-items">
          <li className="left-nav-bar">
            <Link to="/">
              <img className="main-logo" src={window.images.main_logo} />
            </Link>
          </li>
          <li>
            <input type="text"
              placeholder="               &#128269; search"
              className="search-input"/
              >
          </li>
          <li className="right-nav-bar">
            <img className="profile-logo" src={window.images.profile_logo} />
          </li>
        </ul>
      </div>
    )
  }

}

export default NavBar;
