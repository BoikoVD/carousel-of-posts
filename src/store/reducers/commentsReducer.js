import * as types from '../types/types';

const defaultState = {
  comments: []
};

export default function commentsReducer(state = defaultState, action) {
  switch (action.type) {
    case types.SET_COMMENTS:
      return {
        ...state, comments: action.payload.comments
      }
    default:
      return state;
  }
}