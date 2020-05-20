import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import TextPostFormContainer from '../posts/text_post_form_container';
import QuotePostFormContainer from '../posts/quote_post_form_container';
import ImagePostFormContainer from "../posts/image_post_form_container";
import VideoPostFormContainer from "../posts/video_post_form_container";
import AudioPostFormContainer from "../posts/audio_post_form_container";

import BlogOneFormContainer from "../blogs/blog_one_form";

import BlogTwoFormContainer from "../blogs/blog_two_form";

import BlogThreeFormContainer from "../blogs/blog_three_form";

import BlogFourFormContainer from "../blogs/blog_four_form";

import BlogFiveFormContainer from "../blogs/blog_five_form";

import BlogSixFormContainer from "../blogs/blog_six_form";

import BlogSevenFormContainer from "../blogs/blog_seven_form";

import EditDeleteFormContainer from "../posts/edit_delete_form_container";

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

  if (modal === "edit-delete-form-container") {
    
    return (
      // <div className="modalTwo-background" onClick={closeModal}>
        // CORRECT BACKGROUND
        // <div className="modalTwo-child" onClick={e => e.stopPropagation()}>
          <EditDeleteFormContainer />
        // </div>
      // </div>
    )
  }
    let component;
    switch (modal) {
      case "text-post-form":
        component = <TextPostFormContainer />;
        break;
      case "quote-post-form":
        component = <QuotePostFormContainer />;
        break;
      case "image-post-form":
        component = <ImagePostFormContainer />;
        break;
      case "video-post-form":
        component = <VideoPostFormContainer />;
        break;
      case "audio-post-form":
        component = <AudioPostFormContainer />;
        break
      case "blog-one-form":
        component = <BlogOneFormContainer />;
        break;
      case "blog-two-form":
        component = <BlogTwoFormContainer />;
        break;
      case "blog-three-form":
        component = <BlogThreeFormContainer />;
        break;
      case "blog-four-form":
        component = <BlogFourFormContainer />;
        break;
      case "blog-five-form":
        component = <BlogFiveFormContainer />;
        break;
      case "blog-six-form":
        component = <BlogSixFormContainer />;
        break;
      case "blog-seven-form":
        component = <BlogSevenFormContainer />;
        break;
      // case "edit-delete-form-container":
      //   component = <EditDeleteFormContainer />;
      //   break;
      default:
        return null;
    }
    return (
      
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);