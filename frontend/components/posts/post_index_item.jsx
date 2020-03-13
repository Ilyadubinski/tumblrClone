import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment, faRetweet, faCog
} from "@fortawesome/free-solid-svg-icons";


class PostIndexItem extends React.Component {
    render() {
        return (
        <div className='post-container'>
                <div className='avatar'>
                    <img class="avatar"
                    src="https://img.icons8.com/bubbles/50/000000/freddie-mercury.png"
                    id="75"
            />
                </div> 
            <div className='post-box'>
                <div className='post-top'>
                    demo-user
                </div>

                <div className='post-title'>
                {this.props.post.title}
                </div>

                <div className='post-text'>
                {this.props.post.text}
                </div>

                <div className='post-bottom'>
                        <FontAwesomeIcon icon={faComment} id='post-icon' />
                        <FontAwesomeIcon icon={faRetweet} id='retweet-icon' />
                        <FontAwesomeIcon icon={faCog} id='post-icon' />
                        
                </div>

            </div>
        </div>

        )
    }
}

export default(PostIndexItem);