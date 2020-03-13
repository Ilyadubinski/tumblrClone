import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';



const mapStateToProps = (state, ownProps) => ({

    errors : state.errors.session, 
    formType : 'signup',
    // What is this?
    navLink: <Link to="/login">log in instead</Link>
})

// In instructions it says that mDTP should take in (dispatch, ownProps)
// is this necessary??
const mapDispatchToProps = (dispatch) => ({
    processForm : user => dispatch(signup(user))
})





export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);