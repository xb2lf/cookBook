import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
import { NavWarp, ListWarp, SubTitle } from './component/StyleList';
import { animate } from '@components';
import { loadDatasAsync } from '@/pages/cookBook/model/actionCreator';


@connect(
  (state) => ({
    list: state.cookbook.list
  }),
  (dispatch) => ({
    loadData() {
      dispatch(loadDatasAsync())
    }
  })
)
@animate
@withRouter
class List extends Component {

  componentDidMount() {
    //解决刷新页面，Redux数据丢失问题
    const { list, loadData } = this.props;
    if (list.length === 0) {
      loadData();
    }
  }
  hanleClickLeft = () => {
    const { history } = this.props;
    history.push('/home', { from: '/list' });
  };
  handleGotoDetail = (title, img) => {
    return () => {
      const state = this.props.location.state;
      this.props.history.push('/detail', { listTitle: state && state.title, title, img, from: '/list' });
    }
  };
  render() {
    const state = this.props.location.state;
    return (
      <NavWarp>
        <NavBar
          mode="drak"
          icon={<Icon type="left" />}
          onLeftClick={this.hanleClickLeft}
        >{state && state.title}</NavBar>
        <ul>
          {
            this.props.list.map((li, i) => (
              <ListWarp
                width="0 0 1px 0"
                key={li.id + i}
                onClick={this.handleGotoDetail(li.title, li.img)}
              >
                <div>
                  <img src={li.img} alt={li.title} />
                </div>
                <div>
                  <h1>{li.title}</h1>
                  <SubTitle>{li.ingredients}</SubTitle>
                  <h3><span>{li.browse}</span>浏览 <span>{li.enshrine}</span>收藏</h3>
                </div>
              </ListWarp>
            ))
          }
        </ul>
      </NavWarp>
    )
  }
}

export default List
