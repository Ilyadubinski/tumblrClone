import * as SearchAPIUtil from '../util/search_api_util';

export const SEARCH_POST = 'SEARCH_POST';
export const CLEAR_SEARCH_LIST = 'CLEAR_SEARCH_LIST';

// regular actions
export const searchPost = post => ({
    type: SEARCH_POST,
    post
});

export const clearSearList = () => ({
    type: CLEAR_SEARCH_LIST
});

// thunk actions
export const search = (key) => dispatch => {
    return SearchAPIUtil.search(key)
        .then(post => dispatch(searchPost(post)))
}

export const clear = () => dispatch => {
    return dispatch(clearSearList())
}