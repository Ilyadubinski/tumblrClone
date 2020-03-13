import { connect } from 'react-redux';
import React from 'react';
import PostIndex from './post_index';
import { fetchAllPosts } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const msp = (state) => {
    return {
        posts: Object.values(state.entities.posts),
        currentUser: state.entities.users[state.session.id]
    }
};

const mdp = (dispatch) => ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    openTextPostForm: () => dispatch(openModal('text-post-form')),
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(PostIndex);
