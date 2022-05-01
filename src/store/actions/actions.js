import * as types from '../types/types';

export const getPostsAC = () => ({ type: types.GET_POSTS });
export const setPostsAC = (posts) => ({ type: types.SET_POSTS, payload: { posts } });
export const getCommentsAC = (postId) => ({ type: types.GET_COMMENTS, payload: { postId } });
export const setCommentsAC = (comments) => ({ type: types.SET_COMMENTS, payload: { comments } });
export const createPostAC = (title, body) => ({ type: types.CREATE_POST, payload: { title, body } });