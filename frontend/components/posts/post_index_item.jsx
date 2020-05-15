import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment, faRetweet, faCog
} from "@fortawesome/free-solid-svg-icons";


class PostIndexItem extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
          liked : false,
          reblogged : false 
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

    reblog(e) {
      const post = this.props.post; 

      const reblog = e.target 
      if (this.state.reblogged) {
        this.setState({ reblogged: false });
        
        reblog.classList.remove('retweeted')
        reblog.classList.add("retweet")
      } else {
        this.setState({ reblogged: true });
        reblog.classList.remove('retweet')
        reblog.classList.add("retweeted")
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
                src="https://img.icons8.com/color/48/000000/einstein.png"
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

                <div className="retweet" onClick={(e) => this.reblog(e)} id='retweet-div'>
                <FontAwesomeIcon icon={faRetweet}/>
                </div>
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