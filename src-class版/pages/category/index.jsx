import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CategoryWrap } from './component/StyleCategory';
import { Search, MenuList } from '@components';
import { getDatasAsync, changeCateType, changeCateAside } from './model/actionCreator';

@connect(
  (state) => ({
    obj: state.category.obj,
    cateType: state.category.routerInfo.cateType,
    cateAside: state.category.routerInfo.cateAside,
  }),
  (dispatch) => ({
    getData() {
      dispatch(getDatasAsync())
    },
    changeCateTp(cateType) {
      dispatch(changeCateType(cateType));
    },
    changeCateAs(cateAside) {
      dispatch(changeCateAside(cateAside));
    }
  })
)
@withRouter
class CateGory extends Component {

  componentDidMount() {
    const { cateType, cateAside, changeCateAs, getData } = this.props;
    getData();
    if (cateAside === '') {
      changeCateAs(cateType === 'category' ? '热门' : '肉类');
    }
  }
  hanleClick = (cateType) => {
    const { changeCateTp, changeCateAs } = this.props;
    return () => {
      changeCateTp(cateType);
      changeCateAs(cateType === 'category' ? '热门' : '肉类');
    }
  };
  handleAsideClick = (value) => {
    this.props.changeCateAs(value);
  };
  handleGotoList = (title) => {
    return () => {
      this.props.history.push('/list', { title })
    }
  };
  render() {
    const { obj, cateType, cateAside } = this.props;
    return (
      <CategoryWrap>
        <nav>
          <ul>
            <li className={cateType === 'category' ? 'active' : ''} onClick={this.hanleClick('category')}>分类</li>
            <li className={cateType === 'material' ? 'active' : ''} onClick={this.hanleClick('material')}>食材</li>
            <li className={cateType === 'category' ? 'slide' : 'slide right'}></li>
          </ul>
        </nav>
        <main>
          <Search
            outerbg="#fff"
            innerbg="#efefef"
            hasborder={false}
            title="爱吃什么搜这里，如川菜"
          ></Search>
          <MenuList
            cate={obj}
            type={cateType}
            curCate={cateAside}
            asideClick={this.handleAsideClick}
            onGotoList={this.handleGotoList}
          ></MenuList>
        </main>
      </CategoryWrap>
    )
  }
}

export default CateGory
