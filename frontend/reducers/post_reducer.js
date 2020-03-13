import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions';


const postReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState)
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
           newState = Object.assign({}, action.posts)
            return newState;
        case RECEIVE_POST:
            newState[action.post.id] = action.post;
            return newState;
        default:
            return prevState;
    }
};

export default postReducer;