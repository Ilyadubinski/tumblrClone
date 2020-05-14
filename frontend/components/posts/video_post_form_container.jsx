import { connect } from "react-redux";
import React from "react";
import { createPost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhotoVideo
} from "@fortawesome/free-solid-svg-icons";

class VideoPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      content_url: "",
      tags: "",
      user_id: this.props.CurrentUser.id,
      post_type: "video",
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
      <form onSubmit={this.handleSubmit} className="new-post-container">
        <div className="new-post-title">
          <input
            className="title-input"
            type="text"
            placeholder="Title"
            size="60"
            value={this.state.title}
            onChange={this.update("title")}
          />
        </div>
        <div>
          <input className="upload"
            type="file"
            name="file"
            id="file"
            onChange={this.handleFile}
          />
          <label htmlFor="file">
            <div className="upload-file">
              <p> <FontAwesomeIcon icon={faPhotoVideo} className='camera-icon' /></p>
              <p>Upload video</p>
              {/* <p><i className="far fa-laugh-squint"></i></p> */}
            </div>
          </label>
          <textarea className="content-tag"
            type="text"
            value={this.state.content}
            onChange={this.update("text")}
            placeholder="Add a caption, if you like"
          />
          <div className="post-form-footer">
            <button onClick={this.props.closeModal} className="close-modal">Close</button>
            <input className="submit-post" type="submit" value={this.props.post_type} />
          </div>

        </div>
      </form>

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
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(VideoPostForm);
