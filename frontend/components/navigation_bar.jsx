import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub, faSearch,faLinkedin, faAngellist, 
} from "@fortawesome/free-brands-svg-icons";



class NavigationBar extends React.Component {
   
    search(string) {
    window.find(string);
    }

    render() {
        let rightNavButtons = (<nav className="nav-bar-login-signup-button">
            <ul>
                <Link to="/signup" className='signup-link'>
                    <li className="signup-button">Sign Up</li>

                </Link>
                <Link to="/login" className='signup-link'>
                    <li className="login-button">Login</li>

                </Link>
            </ul>
        </nav>)
        if (this.props.currentUser) {
            rightNavButtons = (<nav className="nav-bar-login-signup-button">
                <ul>

                    {/* <h2>Hi, {this.props.currentUser.username}!</h2> */}
                    <button className='logout-button' onClick={this.props.logout}>Log Out</button>
                    <i className="fas fa-user"></i>

                </ul>
            </nav>)
        }
        return (
        <div className="navigation-bar">
            <div className="navigation-bar-flexbox">
                <a className="wander-icon" href="#/">W</a>
                <div className="search-bar">
                    <form className="search-box">
                        <FontAwesomeIcon icon={faSearch} className='search-icon'/>
                        <input id="search"
                            className="search-input"
                            type="text"
                            placeholder="Search Wander"
                            title="Search posts and tags...try searching &quot;hello world&quot;">
                            
                        </input>
                        <input
                            // onClick={search(document.getElementById('search').value)}
                            type="submit"
                            className="hidden"
                            value="submit">
                        </input>
                    </form>
                </div>
                <ul className="devlinks">
                    <li>
                        <a href="https://github.com/Ilyadubinski" target='_blank'>
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="social-icon"
                                id="github-icon"
                            />
                        </a>
                    </li>
                  
                    <li>
                        <a href="https://www.linkedin.com/in/ilyadubinski/" target='_blank'>
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="social-icon"
                                id="github-icon"
                            />
                        </a>
                    </li>

                    <li>
                        <a href="https://angel.co/u/ilya-dubinski" target='_blank'>
                            <FontAwesomeIcon
                                icon={faAngellist}
                                className="social-icon"
                                id="github-icon"
                            />
                        </a>
                    </li>
                </ul>
                {rightNavButtons}
            </div>


        </div>

        )
    }
}


export default NavigationBar;