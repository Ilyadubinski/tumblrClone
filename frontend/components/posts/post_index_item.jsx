import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment, faRetweet, faCog
} from "@fortawesome/free-solid-svg-icons";


class PostIndexItem extends React.Component {
    
    constructor(props) {
      
        super(props)
        
      this.handleToggleMenu = this.handleToggleMenu.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);

        this.state = {
          liked : false,
          reblogged : false,
          open: false 
        }
      }
      
  handleToggleMenu() {
    // debugger 
    this.setState({
      open: !this.state.open
    })
  }

  handleEdit(event) {
    event.preventDefault();
    this.props.openEditForm(this.props.post.id);
  }

  handleDelete(event) {
    // debugger 
    event.preventDefault();
    this.props.deletePost(this.props.post.id);
  }
      
      componentDidMount() {
        let currentUser = this.props.currentUser
        this.props.post.likes.forEach(like => {
          // debugger 
          if (like.user_id === currentUser.id) {
            this.setState({liked : true})
            // if ( this.state.liked ) {
              // debugger 
              // let heart = document.getElementById('heart-div')
              // heart.classList.remove('heart')
              // heart.classList.add("heart-liked")
            // }
            // console.log(this.state.liked) 
            // ---returning 18 fales 
            // heart.classList.remove('heart')
            // heart.classList.add("heart-liked")
            // select heart and add/ remove css to indicate that the like ids do match. 
        }
    
        })
    
    //   this.props.fetchAllLikes();
    //   debugger 
    //   this.setState({ liked : this.props.liked })
    }

    // componentDidUpdate(prevState) {
  
    //     if (this.props.liked != prevState.liked) {
    //         this.setState({ liked: this.props.liked });
    //     }
    // }
  // handleClick(userLiked) {
  //   const { likePost, unlikePost, currentUser, post, likes } = this.props;

  //   if (userLiked) {
  //     let userLike = likes.find(like => like.userId === currentUser.id);
  //     unlikePost(userLike.id);
  //   } else {
  //     likePost({ user_id: currentUser.id, like_id: post.id });
  //   }
  // }

    toggleLike(e) {
        const post = this.props.post;
        
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
        let heartClass = this.state.liked ? "heart-liked" : "heart"
        
        let editDelete;
        if (this.state.open) {
          editDelete = <div className="post-menu">
            {/* <button onClick={this.handleEdit}>Edit</button> */}
            <button onClick={this.handleDelete}>Delete</button>
          
          </div>
        }


        let imgTag; 
        // debugger
        if (this.props.post.photoUrl) {
          imgTag = <div><img src={this.props.post.photoUrl} width="100%" /></div>
        } 
        // debugger
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
              <div className="post-top" onClick={this.props.openblogSeven}> {this.props.currentUser.username}</div>

              <div className="post-title">{this.props.post.title}</div>

              
            
              <div className="post-text">
                <div className='img-container'>
                
                </div>
                {imgTag}
                {this.props.post.text}
                </div>
              
              <div className="post-bottom">
                <FontAwesomeIcon icon={faComment} id="post-icon" className="comment"/>

                <div className="retweet" onClick={(e) => this.reblog(e)} id='retweet-div'>
                <FontAwesomeIcon icon={faRetweet}/>
                </div>
                {/* <div className="meow" onClick={this.props.EditDeletePostForm}> */}

                <div className='post-controls-container'>
                  <button onClick={this.handleToggleMenu} className='button-white'>
                  <FontAwesomeIcon icon={faCog} id="post-icon" />
                  </button>

                </div>


                {editDelete}

                {/* </div> */}
                <div className={heartClass} onClick={(e) => this.toggleLike(e) } id='heart-div'>
                  ❤
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default(PostIndexItem);