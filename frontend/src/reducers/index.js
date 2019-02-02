import { postsData } from '../data/posts-data';

const initialState = {
    posts: postsData
};

export function dumbRootReducer(state = initialState, action) {
    return state;
}