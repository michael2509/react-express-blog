import { REQUEST_POSTS, REQUEST_POSTS_SUCCESS, REQUEST_POSTS_ERROR } from './actionTypes';

// action dispatched when
// start fetching posts
export function requestPosts() {
    return {
        type: REQUEST_POSTS,
        status: 'fetching'
    }
}

// action dispatched when
// fetching posts end with success
export function requestPostsSuccess(posts) {
    return {
        type: REQUEST_POSTS_SUCCESS,
        status: 'success',
        items: posts
    }
}

// action dispatched when
// fetching posts end with error
export function requestPostsError() {
    return {
        type: REQUEST_POSTS_ERROR,
        status: 'error'
    }
}

// Redux thunk action creator
// For fetching posts
export function fetchPosts() {

    return dispatch => {
        // first dispatch when start fetching
        dispatch(requestPosts());

        return fetch('http://localhost:5000/posts')
            .then(
                response => response.json(),
                error => dispatch(requestPostsError())
            )
            .then(response => dispatch(requestPostsSuccess(response.posts.items)))
    }

}