import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedWord: ""
    }
  }


  componentDidUpdate(prevProps, prevState){
    if (this.state.searchedWord.length == 1 && prevState.searchedWord != this.state.searchedWord) {
      this.props.fetchAllUsers();
    }

    if (this.state.searchedWord.length == 0 && prevState.searchedWord.length != 0) {
      this.props.discardSearchedUsers();
    }
  }

  update() {
    return e => this.setState({ searchedWord: e.currentTarget.value})
  };

  renderSearchResult(){
    let people = this.props.searchedUsers.filter(personInfo => personInfo.username.toLocaleLowerCase().includes(this.state.searchedWord))
    let searchResult = people.map(person => {
      return(
        <a href={`#/users/${person.id}`} className="searched-link" key={person.username}>
          <label className="searched-person">
            <img className="searched-person-img" src={person.photoUrl}></img> {person.username}
          </label>
        </a>
      )
    })

    return(
      <div className="result">
        {searchResult}
      </div>
    )
  }

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
              onChange={this.update()}
              />
            {this.renderSearchResult()}
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
