import React from "react";
import { Provider } from 'react-redux';
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import postIndexContainer from "./posts/post_index_container";
import Modal from './modal/modal';
import ModalTwo from './modal/ModalTwo';


const App = () => (
  <div>
    <Modal />
    {/* <ModalTwo /> */}
    {/* <header className="logo-position">
    <Link to="/" >
        <p className="logo">Wander</p>
      </Link> */}
    {/* </header> */}
    <Switch>
      {/* <Route exact path="/new/text" component={NewPost} /> */}
      {/* <Route exact path="/posts/:post_id/edit" component={EditPost} /> */}
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute path="/postindex" component={postIndexContainer} />
      {/* <Route path="/" component={GreetingContainer} /> */}
      <Redirect path='*' to='/postindex'/>
     
    </Switch>
  </div>
);

export default App;