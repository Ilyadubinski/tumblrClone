import { connect } from "react-redux";
import React from "react";
import { createPost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";

class BlogSevenForm extends React.Component {
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
                    <img className="blog-show-avatar"
                        src="https://img.icons8.com/color/48/000000/einstein.png"
                        id="75"
                    />
                    <div className="blog-show-title">

        
                        {this.props.CurrentUser.username}

                    

                    </div>

                    <div className='blog-list'>
                        {/* this.props.posts is undefined....this form does not have access to posts */}
                       
                        <li className='li-post' style={{ "listStyle": "none" }}>All Posts </li> 
                        {this.props.posts.map(post => 
                            <ul style={{"listStyle":"none"}}>

                                <li>{post.title}</li>

                            </ul>
                        )}
                    
                </div>

            </div>

            </div>
        );
    }
}

const mSTP = (state) => ({
    posts: Object.values(state.entities.posts),
    CurrentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(BlogSevenForm);
