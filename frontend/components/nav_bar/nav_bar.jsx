import React from 'react';

class NavBar extends React.Component {

  render(){
    return(
      <div className="nav-bar">
        <ul className="nav-bar-items">
          <li>
            LEFT
          </li>
          <li>
            CENTER
          </li>
          <li>
            RIGHT
          </li>
        </ul>
      </div>
    )
  }

}

export default NavBar;
