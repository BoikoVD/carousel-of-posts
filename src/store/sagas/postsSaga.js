import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as types from '../types/types';
import * as actions from '../actions/actions';
import * as api from '../../services/api';

function* postsWorker() {
  try {
    const posts = yield call(api.getPosts);
    yield put(actions.setPostsAC(posts));
  } catch (e) {
    console.log('POSTS SAGA ERROR: ', e);
  }
};

function* createPostsWorker({ payload }) {
  const { title, body } = payload;
  try {
    const post = yield call(api.createPost, title, body);
    console.log(post)
    const currentPosts = yield select(s => s.posts.posts);
    const newPosts = [...currentPosts, post];
    yield put(actions.setPostsAC(newPosts));
  } catch (e) {
    console.log('CREATE POST SAGA ERROR: ', e);
  }
};

export function* postsSaga() {
  yield takeEvery(types.GET_POSTS, postsWorker);
  yield takeEvery(types.CREATE_POST, createPostsWorker);
};