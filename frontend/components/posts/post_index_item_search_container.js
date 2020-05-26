import { connect } from 'react-redux';
import React from 'react';
import { faDivide } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment, faRetweet, faCog
} from "@fortawesome/free-solid-svg-icons";

class PostIndexSearchItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
      reblogged: false,
      open: false,
    };
  }

  toggleLike(e) {
    // const post = this.props.post;

    const heart = e.target;

    if (this.state.liked) {
      // this.props.unlikePost(post.id);
      // .then(() => {
      this.setState({ liked: false });
      heart.classList.remove("heart-liked");
      heart.classList.add("heart");

      // })
    } else {
      // this.props.likePost(post.id);
      // .then(() => {
      this.setState({ liked: true });
      heart.classList.remove("heart");
      heart.classList.add("heart-liked");
      // })
    }
  }

  reblog(e) {
    // const post = this.props.post;

    const reblog = e.target;
    if (this.state.reblogged) {
      this.setState({ reblogged: false });

      reblog.classList.remove("retweeted");
      reblog.classList.add("retweet");
    } else {
      this.setState({ reblogged: true });
      reblog.classList.remove("retweet");
      reblog.classList.add("retweeted");
    }
  }

  render() {
    let heartClass = this.state.liked ? "heart-liked" : "heart";

    return (
      <div className="middle-column">
        <div className="post-container">
          <div className="avatar">
            <img
              className="avatar"
              src="https://img.icons8.com/color/48/000000/einstein.png"
              id="75"
            />
          </div>
          <div className="post-box">
            <div className="post-top"> {this.props.currentUser.username}</div>

            <div className="post-title">{this.props.post.title}</div>

            <div className="post-text">
              <div className="img-container"></div>
              {/* {imgTag} */}
              {this.props.post.text}
            </div>

            <div className="post-bottom">
              <FontAwesomeIcon
                icon={faComment}
                id="post-icon"
                className="comment"
              />

              <div
                className="retweet"
                  onClick={(e) => this.reblog(e)}
                id="retweet-div"
              >
                <FontAwesomeIcon icon={faRetweet} />
              </div>
              {/* <div className="meow" onClick={this.props.EditDeletePostForm}> */}

              <div className="post-controls-container">
                <button
                  // onClick={this.handleToggleMenu}
                  className="button-white"
                >
                  <FontAwesomeIcon icon={faCog} id="post-icon" />
                </button>
              </div>

              {/* {editDelete} */}

              {/* </div> */}
              <div
                className={heartClass}
                onClick={(e) => this.toggleLike(e)}
                id="heart-div"
              >
                ❤
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const msp = (state, ownProps) => {
    let postId = Number(ownProps.match.params.postId)
    let post = state.entities.posts[postId]
    if (post===undefined) {
        return {}
    }

    return {
        posts: Object.values(state.entities.posts),
        post: post,
        currentUser: state.entities.users[state.session.id],
        // NOT WORKING
        // likes: Object.values(state.entities.likes).filter(like => like.id === ownProps.post.id)
    }
};

const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    deletePost: (postId) => dispatch(deletePost(postId)),
    fetchSinglePost: () => dispatch(fetchSinglePost(postId)),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    likePost: (postId) => dispatch(likePost(postId)),
    unlikePost: (postId) => dispatch(unlikePost(postId)),
    logout: () => dispatch(logout()),
    fetchAllLikes: () => dispatch(fetchAllLikes()),
    EditDeletePostForm: () => dispatch(openModal("edit-delete-form-container"))
});

export default connect(msp, mdp)(PostIndexSearchItem);
