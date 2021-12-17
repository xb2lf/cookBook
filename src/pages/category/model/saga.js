import { takeEvery, put, call } from 'redux-saga/effects';
import { get } from '@utils/http';
import { getDataSync } from './actionCreator';

function* getDatasAsync() {
  const result = yield call(get, { url: '/api/category' });
  yield put(getDataSync(result.data.data));
}

function* getData() {
  yield takeEvery('getDataSaga', getDatasAsync);
}

export default getData