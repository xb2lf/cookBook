import { takeEvery, put, call } from 'redux-saga/effects';
import { get } from '@utils/http';
import { loadDataSync } from './actionCreator';

function* loadDatasAsync() {
  const result = yield call(get, { url: '/api/list' });
  yield put(loadDataSync(result.data.data));
}

function* loadData() {
  yield takeEvery('loadDataSaga', loadDatasAsync);
}

export default loadData