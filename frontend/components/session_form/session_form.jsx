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
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="login-errors">
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
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <h1 className="login-title-font">OfficeGram</h1>
              <h2 className="login-description-font">Log in to see photos and videos of your friends</h2>
              {this.renderErrors()}
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
              <input type="submit" className="login-submit" value="Log In"/>
              <input type="submit" className="demo-login-submit" value="Demo Log In"/>
            </form>
          </div>
          <div className="link-to-signup">
            <p className="redirect">Don't have an account?
              <Link to="/signup"> Sign up</Link>
            </p>
          </div>
        </div>

      </div>
    )
  }
}

export default SessionForm;
