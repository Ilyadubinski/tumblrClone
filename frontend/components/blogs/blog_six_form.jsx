import { connect } from "react-redux";
import React from "react";
import { createPost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";

class BlogSixForm extends React.Component {
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
            <div className="blog-container">
                <div className="postbox-peek">
                    <img className="blog-avatar"
                        src="https://dreamr-app.herokuapp.com/assets/cloud_avatar-35871f205f34d3ba755f43a0618a7ed8e732e01458082ddbf5d7b959534a59de.png"
                        id="75"
                    />
                    <div className="blog-show-title">


                        TheOfficialPepsiBestie

                    </div>
                </div>

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
    closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(BlogSixForm);
