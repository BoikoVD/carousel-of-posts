import * as types from '../types/types';

const defaultState = {
  posts: [],
  isLoading: true
};

export default function postsReducer(state = defaultState, action) {
  switch (action.type) {
    case types.SET_POSTS:
      return {
        ...state, posts: action.payload.posts, isLoading: false
      }
    default:
      return state;
  }
}