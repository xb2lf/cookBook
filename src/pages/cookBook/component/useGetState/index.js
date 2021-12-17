import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDatasAsyncSaga } from '../../model/actionCreator';

const useGetState = (props) => {
  const dispatch = useDispatch();
  //useSelector实现state的跟踪和缓存
  const list = useSelector(state => state.getIn(['cookbook', 'list']));
  useEffect(() => {
    dispatch(loadDatasAsyncSaga());
  }, [dispatch]);
  return {
    list
  }
};

export default useGetState