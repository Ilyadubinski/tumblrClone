import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state, ownProps) => ({
    errors : state.errors.session, 
    formType : 'login',
    // what is this????
    navLink: <Link to="/signup">sign up instead</Link>
    // make another link to /dashboard
})

// In instructions it says that mDTP should take in (dispatch, ownProps)
// is this necessary??
const mapDispatchToProps = (dispatch) => ({

    guestLogin : () => dispatch(login({username : "guest", password : "password"})),
    processForm : user => dispatch(login(user))

})





export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
