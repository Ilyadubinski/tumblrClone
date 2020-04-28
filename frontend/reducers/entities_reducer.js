import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postReducer from './post_reducer';
import likesReducer from './likes_reducer';

const entitiesReducer = combineReducers({
    users : usersReducer,
    posts : postReducer,
    likes: likesReducer
})

export default entitiesReducer;     