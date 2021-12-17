import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, NavBar } from 'antd-mobile';
import { NavWarp, MoreWrap } from './component/StyleMore';
import { changeSwitch } from '@/pages/home/model/actionCreator'

@connect(
  state => ({ checked: state.home.checked }),
  dispatch => ({
    handleChange(checked) {
      dispatch(changeSwitch(checked));
      // 本地存储checked状态
      localStorage.setItem('checked', checked);
    }
  })
)
class More extends Component {
  state = {
  };
  render() {
    const { checked, handleChange } = this.props;
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
  }
}
export default More
