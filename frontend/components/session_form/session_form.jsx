import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }

  renderErrors(){
    return(
      <ul className="error-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="submit-errors">
            { error }
          </li>
        ))}
      </ul>
    );
  }

  render(){
    return(
      <div className="login">
        <img src="../../../app/assets/images/picture.png" />
        <div className="login-form">
          <div className="form-container">
            <form onSubmit={this.handleSubmit} className="form-box">
              <h1 className="login-title-font">OfficeGram</h1>
              <h2 className="login-description-font">Log in to see photos and videos of your friends</h2>
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="username"
                className="login-input"/>
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="password"
                className="login-input" />
              <br/>
              <input type="submit" className="submit-button" value="Log In"/>
              <input type="submit" className="demo-login-submit" value="Demo Log In"/>
              {this.renderErrors()}
            </form>
          </div>
          <div className="link-to-signup">
            <p>Don't have an account?
              <Link to="/signup" className="redirect"> Sign up</Link>
            </p>
          </div>
        </div>

      </div>
    )
  }
}

export default SessionForm;
