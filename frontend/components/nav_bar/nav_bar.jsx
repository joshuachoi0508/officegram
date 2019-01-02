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
          <li className="search-bar">
            <input type="text"
              placeholder="             search"
              className="search-input"
              />
            <label className="result">
            </label>
          </li>
          <li className="right-nav-bar">
            <a href="#/upload">
              <img className="upload-logo" src={window.images.upload_logo} />
            </a>
            <Link to="/profile">
              <img className="profile-logo" src={window.images.profile_logo} />
            </Link>
          </li>
        </ul>
      </div>
    )
  }

}

export default NavBar;
