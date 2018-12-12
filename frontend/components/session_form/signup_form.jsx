import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state)
      .then(this.props.history.push("/"));
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  };

  renderErrors(){
    return(
      <ul className="error-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="submit-errors">
            { error }
          </li>
        ))}
      </ul>
    )
  }

  render(){
    return(
        <div className="signup">
          <div className="signup-form">
            <img className="session-logo" src={window.images.login_logo} />
              <div className="form-and-redirect">
              <div className="form-container">
                <form className="form-box" onSubmit={this.handleSubmit}>
                  <h1 className="login-title-font">OfficeGram</h1>
                  <h2 className="login-description-font">Sign up to see photos and videos of your friends</h2>
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update("username")}
                    className="signup-input"
                    placeholder="username"
                    />
                  <br/>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="signup-input"
                    placeholder="password"
                    />
                  <br/>
                  <input type="submit"
                    value="Sign up"
                    className="submit-button"
                     />
                  {this.renderErrors()}
                </form>
              </div>
              <div className="link-to-login">
                <p>Already have an account?
                  <Link to="/login" className="redirect"> Log in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default SignupForm;
