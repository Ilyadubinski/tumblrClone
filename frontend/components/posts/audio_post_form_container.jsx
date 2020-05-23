import { connect } from "react-redux";
import React from "react";
import { createPost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones
} from "@fortawesome/free-solid-svg-icons";

class AudioPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      content_url: "",
      tags: "",
      user_id: this.props.CurrentUser.id,
      post_type: "text",
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
          
          <label htmlFor="file">
            <div className="upload-file">
              <p> <FontAwesomeIcon icon={faHeadphones} className='camera-icon' /></p>
              <input className="upload"
                type="file"
                name="file"
                id="file"
                onChange={this.handleFile}
              />
              <p>Upload audio</p>
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

export default connect(mSTP, mDTP)(AudioPostForm);
