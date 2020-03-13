import React from 'react';
import { Link } from 'react-router-dom';
import { ReactReduxContext } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";




const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
      return (
          <div>
              <h2>Hi, {currentUser.username}!</h2>
              <button onClick={logout}>Log Out</button>

          </div>
             )
    } else {
          return(

          <div className='splash-master'>
              <div className="navigation-bar">
                <div className="navigation-bar-flexbox">
                  <a className="wander-icon" href="#/">W</a>
                  <div className="search-bar">
                    <form className="search-box">
                      <input id="search" 
                      className="search-input" 
                      type="text" 
                      placeholder="Search Wander" 
                      title="Search posts and tags...try searching &quot;hello world&quot;">
                      </input>
                      <input 
                      type="submit" 
                      className="hidden" 
                      value="submit">
                      </input>
                    </form>
                  </div>
                  <ul className="devlinks">
                    <a href="https://github.com/Ilyadubinski">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="social-icon"
                        id="github-icon"
                      /></a>
                   
                  </ul>
                  <nav className="nav-bar-login-signup-button">
                  <ul>
                      <Link to="/signup" className='signup-link'>
                    <li className="signup-button">Sign Up</li>
                       
                      </Link>
                      <Link to="/login" className='signup-link'>
                    <li className="login-button">Login</li>
                        
                      </Link>  
                  </ul>
                  </nav>
                </div>


              </div>

            {/* <div className="background">
            <img src={window.images.one}></img>
              </div> */}
              {/* moves everything when I try to remove image */}

            <div className="session-form">
              <div id="random" 
              className="login-form-background-container"></div>

            </div>
       
              <div className="form-box">
                <div className="wander-logo">
                  <h1 >Wander</h1>
                  <h3 className='welcome1'>Come for what you love.</h3>
                  <h3 className='welcome2'>Stay for what you discover.</h3>
                </div> 
                
                <Link to="/signup" className='signup-link'>
                  <button className="get-started">Get Started</button>
                </Link>
                <br />
                <Link to="/login" className='signup-link'>
                  <button className="login">Login</button>
                </Link>  
              </div>
           
               {/* <h2>You Are Not Logged In!</h2>  */}
               
             
              
               
            </div>
          )  

        }
  

  
  

};


export default Greeting;
