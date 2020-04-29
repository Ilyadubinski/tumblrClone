import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import TextPostFormContainer from '../posts/text_post_form_container';
import QuotePostFormContainer from '../posts/quote_post_form_container';
import ImagePostFormContainer from "../posts/image_post_form_container";
import VideoPostFormContainer from "../posts/video_post_form_container";
import AudioPostFormContainer from "../posts/audio_post_form_container";

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
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
        break;
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