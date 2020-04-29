import { connect } from "react-redux";
import React from "react";
import { createPost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";


class ImagePostForm extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      title: "",
      text: "",
      content_url: "",
      tags: "",
      user_id: this.props.CurrentUser.id,
      post_type: "quote",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.createPost(post);
  }
  render() {
    return (
      // <div className='text-post-form'>
      <div>
        <form onSubmit={this.handleSubmit} className="new-post-container">
          <div className="new-post-title">
            <input
              className="title-input"
              type="text"
              placeholder="Image Title"
              size="60"
              value={this.state.title}
              onChange={this.update("title")}
            />
          </div>
          <div className="new-post-text">
            <input
              className="text-input"
              type="text"
              placeholder=" Upload Image Here "
              size="60"
              value={this.state.text}
              onChange={this.update("text")}
            />
          </div>
          <div className="new-post-bottom">
            <button type="submit" className="post-button">
              Post
            </button>
          </div>
          {/* <div className='post-bottom'> */}
          {/* 
                        </div> */}
        </form>
      </div>

      // </div>
    );
  }
}

const mSTP = (state) => ({
  post_Type: state.ui.modal,
  CurrentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
  closeModalForm: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(ImagePostForm);
