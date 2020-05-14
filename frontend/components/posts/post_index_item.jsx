import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment, faRetweet, faCog
} from "@fortawesome/free-solid-svg-icons";


class PostIndexItem extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
          liked : false
        }
    }


    // componentDidMount() {
    
    //         this.props.fetchSinglePost(this.props.postId);
    // }

    // componentDidUpdate(prevState) {
  
    //     if (this.props.liked != prevState.liked) {
    //         this.setState({ liked: this.props.liked });
    //     }
    // }

    toggleLike(e) {
        const post = this.props.post;
        // debugger 
        const heart = e.target

        if (this.state.liked) {
            this.props.unlikePost(post.id)
            // .then(() => {
              this.setState({ liked: false });
              heart.classList.remove('heart-liked')
              heart.classList.add("heart")
            // })
        } else {
            this.props.likePost(post.id)
            // .then(() => { 
              this.setState( { liked: true });
              heart.classList.remove('heart')
              heart.classList.add("heart-liked")
            // })
        }
    }

    

    render() {
      // console.log(this.props)
      //  debugger 
        return (
          <div className="post-container">
            <div className="avatar" onClick={this.props.openblogSeven}>
              <img
                className="avatar"
                src="httpss://img.icons8.com/bubbles/50/000000/freddie-mercury.png"
                id="75"
                onClick={this.props.openblogSeven}
              />
            </div>
            <div className="post-box">
              <div className="post-top" onClick={this.props.openblogSeven}>demo-user</div>

              <div className="post-title">{this.props.post.title}</div>

              <div><img src={this.props.post.photoURL} width="99%"></img></div>

              <div className="post-text">{this.props.post.text}</div>

              <div className="post-bottom">
                <FontAwesomeIcon icon={faComment} id="post-icon" />
                <FontAwesomeIcon icon={faRetweet} id="retweet-icon" />
                <FontAwesomeIcon icon={faCog} id="post-icon" />
                <div className="heart" onClick={(e) => this.toggleLike(e) } id='heart-div'>
                  ❤
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default(PostIndexItem);