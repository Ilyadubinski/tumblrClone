import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub
} from "@fortawesome/free-brands-svg-icons";
import {
     faSearch
} from "@fortawesome/free-solid-svg-icons";



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
                    <a href="https://github.com/Ilyadubinski" target='_blank'>
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="social-icon"
                            id="github-icon"
                        /></a>

                </ul>
                {rightNavButtons}
            </div>


        </div>

        )
    }
}


export default NavigationBar;