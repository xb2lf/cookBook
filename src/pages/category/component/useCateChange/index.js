import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCateType, changeCateAside } from '../../model/actionCreator';

const useCateChange = () => {
  const obj = useSelector(state => state.getIn(['category', 'obj']));
  const cateAside = useSelector(state => state.getIn(['category', 'routerInfo', 'cateAside']));
  const cateType = useSelector(state => state.getIn(['category', 'routerInfo', 'cateType']));
  const dispatch = useDispatch();

  const hanleClick = useCallback((cateType) => {
    return () => {
      dispatch(changeCateType(cateType));
      dispatch(changeCateAside(cateType === 'category' ? '热门' : '肉类'));
    }
  },
    [dispatch],
  )
  const handleAsideClick = useCallback((value) => {
    dispatch(changeCateAside(value));
  }, [dispatch]);
  return {
    obj,
    cateType,
    cateAside,
    hanleClick,
    handleAsideClick,
  }
};

export default useCateChange