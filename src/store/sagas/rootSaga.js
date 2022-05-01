import { all, spawn } from 'redux-saga/effects';
import { postsSaga } from './postsSaga';
import { commentsSaga } from './commentsSaga';

export default function* rootSaga() {
  const sagas = [
    postsSaga,
    commentsSaga
  ];
  yield all(
    sagas.map(s => spawn(s))
  )
}