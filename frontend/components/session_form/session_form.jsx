import React from 'react';

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
          <li key={`error-${i}`}>
            { error }
          </li>
        ))}
      </ul>
    );
  }

  render(){
    return(
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <input type="text"
            value={this.state.username}
            onChange={this.update("username")}
            className="login-input"/>
          <input type="password"
            value={this.state.password}
            onChange={this.update("password")}
            className="login-input" />
          <input type="submit" className="login-submit" value="Log In"/>
        </form>
      </div>
    )
  }
}

export default SessionForm;
