import React from 'react';
import postIndex from '../posts/post_index'
import { Link } from 'react-router-dom';

import NavigationBarContainer from '../navigation_bar_container';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }

      guestUserLoginButton() {
          if (this.props.formType === 'login') {
              return (
                    <div>
                        <br/>
                        <Link to='/postindex'  onClick={() => this.props.guestLogin()}>
                        <button className='guest-login'>Guest Login</button>
                        </Link>
                    </div>
              )
          }
      }
    

      handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
      }

      renderErrors() {
        
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }

      render() {
          const emailInput = 
           
          <label>
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input-email"
            placeholder='Email'
            size="50"
          />
        </label>
        return (
       
          <div className='session-form'>
           
           
              <NavigationBarContainer/>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              
              {/* <div className="guestuser">
              {this.guestUserLoginButton()}
              </div>
              */}

             
              
              {/* Please {this.props.formType} or {this.props.navLink} */}
              
             
                <div className="wander-logo">
                <h1>Wander</h1>

                </div>
                <div className="username-box">
                <label>
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input-username"
                    placeholder='Username'
                    size="50"
                  />
                </label>
                </div>
                <br/>
                <div className="password-box">
                <label>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input-password"
                    placeholder="Password"
                    size="50"
                  />
                </label>

                </div>


                

                
               
                <div className='email-box'>
                { (this.props.formType === 'signup') ? emailInput : null}

                </div>
             
              
                {/* <input className="session-submit" type="submit" value={this.props.formType}/> */}
                <button className="session-submit" type='submit'>{this.props.formType === 'login' ? 'Login' : 'Sign Up'}</button>
                {/* <button className='guest-login' onClick={this.guestUserLoginButton}>Guest Login</button> */}
                <div className="guestuser">
                  {this.guestUserLoginButton()}
                </div>
              <div className='error-message'>
              
                  {this.renderErrors()}
              
                

                </div>
            </form>
          </div>
          // </div>
        );
      }
}






export default SessionForm;