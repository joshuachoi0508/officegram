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
        <form className="signup-form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <input type="text"
            value={this.state.username}
            onChange={this.update("username")}
            className="signup-input"
            />
          <input type="password"
            value={this.state.password}
            onChange={this.update("password")}
            className="signup-input"
            />
          <input type="submit" value="Sign up" />
        </form>
      </div>
    )
  }
}

export default SignupForm;
