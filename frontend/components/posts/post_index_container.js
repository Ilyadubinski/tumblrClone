import { connect } from 'react-redux';
import React from 'react';
import PostIndex from './post_index';
import { fetchAllPosts } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
// import { likePost, unlikePost } from '../../actions/like_actions';
// post index item is my dashboard..should like and unlike be here? 
// I am just going to allow for the demo user to like and unlike a post. 
// I can do that on the front end..but does it make sense for that to persist



const msp = (state) => {
    return {
        posts: Object.values(state.entities.posts),
        currentUser: state.entities.users[state.session.id]
    }
};

const mdp = (dispatch) => ({
  fetchAllPosts: () => dispatch(fetchAllPosts()),
  openTextPostForm: () => dispatch(openModal("text-post-form")),
  openQuotePostForm: () => dispatch(openModal("quote-post-form")),
  openImagePostForm: () => dispatch(openModal("image-post-form")),
  openVideoPostForm: () => dispatch(openModal("video-post-form")),
  openAudioPostForm: () => dispatch(openModal("audio-post-form")),
  likePost: (postId) => dispatch(likePost(postId)),
  unlikePost: (postId) => dispatch(unlikePost(postId)),
  logout: () => dispatch(logout()),
});

export default connect(msp, mdp)(PostIndex);
