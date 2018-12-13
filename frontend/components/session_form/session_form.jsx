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
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  componentDidMount(){
    this.props.removeErrors();
  }


  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.processForm(this.state)
      // .then(this.props.history.push("/"));
  }

  handleDemoUser(e){
    e.preventDefault();

    this.props.processForm({
      username: 'DemoUser',
      password: '123456'
    })
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
        <div className="login-form">
          <img className="session-logo" src={window.images.login_logo} />
          <div className="form-and-redirect">
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
                <input type="submit"
                  className="demo-login-submit"
                  value="Demo Log In"
                  onClick={this.handleDemoUser}
                  />
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

      </div>
    )
  }
}

export default SessionForm;
