import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, NavBar } from 'antd-mobile';
import { NavWarp, MoreWrap } from './component/StyleMore';
import { changeSwitch } from '@/pages/home/model/actionCreator'

const More = (props) => {
  const { checked } = useSelector(state => state.home);
  const dispatch = useDispatch();
  const handleChange = useCallback((checked) => {
    dispatch(changeSwitch(checked));
    // 本地存储checked状态
    localStorage.setItem('checked', checked);
  }, [dispatch]);
  return (
    <NavWarp>
      <NavBar
        mode="drak"
      >更多</NavBar>
      <MoreWrap>
        <span>显示地图：</span>
        <Switch
          checked={checked}
          onChange={handleChange}
        ></Switch>
      </MoreWrap>
    </NavWarp>
  )
};

export default More
