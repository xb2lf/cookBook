import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDatasAsync, changeCateType, changeCateAside } from '../../model/actionCreator';

const useCateChange = () => {
  const { obj, routerInfo: { cateType, cateAside } } = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDatasAsync());
    if (cateAside === '') {
      dispatch(changeCateAside(cateType === 'category' ? '热门' : '肉类'));
    }
  }, [dispatch, cateAside, cateType])

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