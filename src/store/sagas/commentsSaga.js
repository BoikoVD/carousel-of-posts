import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as types from '../types/types';
import * as actions from '../actions/actions';
import * as api from '../../services/api';

function* commentsWorker({ payload }) {
  const { postId } = payload;
  try {
    const allComments = yield select(s => s.comments.comments);
    const comments = allComments.find(c => c.postId === postId);

    if (comments) {
      const newComments = allComments.filter(c => c.postId !== postId);
      yield put(actions.setCommentsAC(newComments));
    } else {
      let obj = { postId, comments: [], isLoading: true };
      yield put(actions.setCommentsAC([...allComments, obj]));
      const commentsReq = yield call(api.getComments, postId);
      obj.comments = commentsReq;
      obj.isLoading = false;
      yield put(actions.setCommentsAC([...allComments, obj]));
    }
  } catch (e) {
    console.log('COMMENTS SAGA ERROR: ', e);
  }
};

export function* commentsSaga() {
  yield takeEvery(types.GET_COMMENTS, commentsWorker);
};