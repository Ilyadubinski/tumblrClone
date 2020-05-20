import { connect } from 'react-redux';
import React from 'react';
import { createPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faQuoteLeft, faQuoteRight
} from "@fortawesome/free-solid-svg-icons";

class EditDeletePostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            text: "",
            content_url: "",
            tags: "",
            user_id: this.props.CurrentUser.id,
            post_type: "text"
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {

        return e => this.setState({

            [field]: e.currentTarget.value
        });
    }


    handleSubmit(e) {
        // debugger 
        e.preventDefault();
        const post = Object.assign({}, this.state);
        this.props.createPost(post);
        this.props.closeModal();
    }
    render() {

        return (

            
                <div className="cog-modal">
                        <button className="edit">Edit</button>
                        <button className="delete">Delete</button>
                </div>

        )
    }

}

const mSTP = state => ({
    post_Type: state.ui.modal,
    CurrentUser: state.entities.users[state.session.id]
})


const mDTP = dispatch => ({
    createPost: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(EditDeletePostForm)