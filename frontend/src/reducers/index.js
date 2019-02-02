import { REQUEST_POSTS, REQUEST_POSTS_SUCCESS, REQUEST_POSTS_ERROR } from '../actions/actionTypes';;

function posts(state = {status: 'empty', items: []}, action) {
    switch(action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                status: action.status
            })
        case REQUEST_POSTS_SUCCESS:
            return Object.assign({}, state, {
                status: action.status,
                items: action.items
            })
        case REQUEST_POSTS_ERROR:
            return Object.assign({}, state, {
                status: action.status
            })
        default:
            return state;
    }
}

export function rootReducer(state = {}, action) {
    return {
        posts: posts(state.posts, action)
    }
}
