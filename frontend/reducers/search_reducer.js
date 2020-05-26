import { SEARCH_POST, CLEAR_SEARCH_LIST } from "../actions/search_actions";

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case SEARCH_POST:

            if (Object.keys(action.post).length === 0) {
                return state;
            }
            return action.post.search;
        case CLEAR_SEARCH_LIST:
            return {};
        default:
            return state;
    }
};


export default searchReducer;