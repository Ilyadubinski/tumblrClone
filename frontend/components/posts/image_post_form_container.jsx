import { connect } from "react-redux";
import React from "react";
import { createPost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraRetro
} from "@fortawesome/free-solid-svg-icons";


class ImagePostForm extends React.Component {
  constructor(props) {
  
    super(props);
    this.state = {
      title: "",
      text: "",  
      photoFile: null,
      photoUrl: null,
      user_id: this.props.CurrentUser.id,
      post_type: "photo",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // handleSubmit(e) {
  //   // debugger
  //   e.preventDefault();
  //   const post = Object.assign({}, this.state);
  //   this.props.createPost(post);
  // }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[title]', this.state.title);
    formData.append('post[text]', this.state.text);
    formData.append('post[user_id]', this.state.user_id);
    formData.append('post[original_post_id]', this.state.original_post_id);
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    this.props.createPost(formData);
    this.props.closeModal();
  }

  // handleFile(e) {
  //   const file = e.currentTarget.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.onloadend = () => {
  //     this.setState({photoFile: e.currentTarget.files[0]})

  //   }
  // }
  handleFile(e) {

    e.preventDefault();
    const file = e.currentTarget.files[0];
    e.currentTarget.value = null;
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  
  render() {
    // console.log(this.state)

    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} width="100%" height="20%" /> : null;

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
            {/* <input className="upload"
              type="file"
              name="file"
              id="file"
              onChange={this.handleFile}
            /> */}
          
             
         
          <textarea className="content-tag"
            type="text"
            value={this.state.text}
            onChange={this.update("text")}
            placeholder="Add a caption, if you like"
          />
          <div className="post-form-footer">
            <button onClick={this.props.closeModal} className="close-modal">Close</button>
            <input className="submit-post" type="submit" value={this.props.post_type} />
          </div>

      </div>
      </form>
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

export default connect(mSTP, mDTP)(ImagePostForm);
