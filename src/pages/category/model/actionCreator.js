import { GETDATA, SELECTDTAB, CATETYPE, CATEASIDE } from "./actionTypes";
/* import { get } from '@utils/http'; */

const getDataSync = obj => {
  return {
    type: GETDATA,
    obj,
  }
};

/* const getDatasAsync = () => {
  return async (dispatch) => {
    const result = await get({
      url: '/api/category'
    });
    dispatch(getDataSync(result.data.data));
  }
}; */
const getDataAsyncSaga = () => {
  return {
    type: 'getDataSaga',
  }
}
const changeSelectedTab = selectedTab => {
  return {
    type: SELECTDTAB,
    selectedTab,
  }
};
const changeCateType = cateType => {
  return {
    type: CATETYPE,
    cateType,
  }
};
const changeCateAside = cateAside => {
  return {
    type: CATEASIDE,
    cateAside,
  }
};

export {
  getDataSync,
  getDataAsyncSaga,
  changeSelectedTab,
  changeCateType,
  changeCateAside
}