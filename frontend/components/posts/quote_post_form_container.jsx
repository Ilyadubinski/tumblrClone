import { connect } from "react-redux";
import React from "react";
import { createPost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";

class QuotePostForm extends React.Component {
  constructor(props) {
 
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
      <form onSubmit={this.handleSubmit} className="new-post-container">
        <div className="new-post-title">
          <input
            className="title-input"
            type="text"
            placeholder="Source"
            size="60"
            value={this.state.title}
            onChange={this.update("title")}
          />
        </div>
        <div>

          <textarea className="content-quote"
            type="text"
            value={this.state.text}
            onChange={this.update("text")}
            placeholder=' "Quote goes here" '
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

export default connect(mSTP, mDTP)(QuotePostForm);
