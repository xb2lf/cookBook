import { LOADDATA } from './actionTypes';
import { get } from '@utils/http';

const loadDataSync = list => {
  return {
    type: LOADDATA,
    list,
  }
};

const loadDatasAsync = () => {
  return async (dispatch) => {
    const result = await get({
      url: '/api/list'
    });
    dispatch(loadDataSync(result.data.data));
  }
};

export {
  loadDataSync,
  loadDatasAsync,
}