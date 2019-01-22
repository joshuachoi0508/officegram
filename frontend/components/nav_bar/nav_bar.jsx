import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedWord: ""
    }

    this.searchWordNone = this.searchWordNone.bind(this);
  }


  componentDidUpdate(prevProps, prevState){
    if (this.state.searchedWord.length == 1 && prevState.searchedWord != this.state.searchedWord) {
      this.props.fetchAllUsers(this.state.searchedWord);
    }

    if (this.state.searchedWord.length == 0 && prevProps.searchedUsers.length > 0) {
      this.props.discardSearchedUsers();
    }
  }

  update() {
    return e => this.setState({ searchedWord: e.currentTarget.value})
  };

  searchWordNone(){
    this.setState({searchedWord: ""})
  }

  renderSearchResult(){
    let people = this.props.searchedUsers.filter(personInfo => {
      if (this.state.searchedWord.length > 0) {
        return(
          this.props.searchedUsers
        )
      }
    })

    let searchResult = people.map(person => {
      return(
        <a 
        href={`#/users/${person.id}`} 
        className="searched-link" 
        key={person.username}
        onClick={this.searchWordNone}
        >
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
              value={this.state.searchedWord}
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
