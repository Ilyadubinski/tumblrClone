import { connect } from 'react-redux';
import React from 'react';
import NavigationBar from './navigation_bar';
import { logout } from '../actions/session_actions';

const mSTP = state => ({
    currentUser : state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    logout : () => dispatch(logout())
})




export default connect(mSTP, mDTP)(NavigationBar)