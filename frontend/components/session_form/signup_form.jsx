import React from 'react';

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
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  };

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            { error }
          </li>
        ))}
      </ul>
    )
  }

  render(){
    return(
      <div className="signup-form-container">
        <img />
        <div className="signup-form">
          <div className="signup-form-container">
            <form className="signup-form" onSubmit={this.handleSubmit}>
              <h1 className="login-title-font">OfficeGram</h1>
              <h2 className="login-description-font">Sign up to see photos and videos of your friends</h2>
              {this.renderErrors()}
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
              <input type="submit" value="Sign up" />
            </form>
          </div>
          <div className="link-to-signup">
            <p>Already have an account?
              <Link to="/login"> Log in</Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default SignupForm;
