import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment, faRetweet, faCog
} from "@fortawesome/free-solid-svg-icons";


class PostIndexItem extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = ({
    //         author: null || this.props.author,
    //         liked: false || this.props.liked,

    //     })
    //     this.toggleLike = this.toggleLike.bind(this);
    // }

    // componentDidMount() {
    //     if (!this.props.author)
    //         this.props.fetchUser(this.props.authorId);
    // }

    // componentDidUpdate(prevState) {
  
    //     if (this.props.liked != prevState.liked) {
    //         this.setState({ liked: this.props.liked });
    //     }
    // }

    // toggleLike() {
    //     const post = this.props.post;

    //     if (this.state.liked) {
    //         this.props.unlikePost(post.id);
    //     } else {
    //         this.props.likePost(post.id);
    //     }
    // }

    render() {
        return (
        <div className='post-container'>
                <div className='avatar'>
                    <img className="avatar"
                    src="httpss://img.icons8.com/bubbles/50/000000/freddie-mercury.png"
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
                        {/* <button
                            className={likedPost}
                            onClick={this.toggleLike}>like</button> */}
                        
                </div>

            </div>
        </div>

        )
    }
}

export default(PostIndexItem);