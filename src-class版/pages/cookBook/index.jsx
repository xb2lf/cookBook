import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import memozie from 'memoize-one';
import { NavBar } from 'antd-mobile';
import { Container } from './component/StyleCookBook';
import { Swiper, HotCate, Top10 } from './component';
import { Search } from '@components';
import { loadDatasAsync } from './model/actionCreator';

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
@withRouter
class CookBook extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
  };
  componentDidMount() {
    this.props.loadData();
  }
  componentDidUpdate() {
    console.log(this.props.list);
  }
  handleGotoDetail = (title, img) => {
    return () => {
      this.props.history.push('/detail', { title, img, from: '/home' });
    }
  };
  swiper = memozie((list) => list.slice(0, 5));
  hotCate = memozie((list) => list.slice(0, 10));
  render() {
    const { list } = this.props;
    const filterSwiper = this.swiper(list);
    const filterHotCate = this.hotCate(list);
    return (
      <Container>
        <NavBar
          mode="drak"
        >美食大全</NavBar>
        <main>
          <Swiper list={filterSwiper} onGotoDeatil={this.handleGotoDetail}></Swiper>
          <Search
            outerbg="#f5f5f9"
            innerbg="#ffffff"
            hasborder={true}
            title="爱吃什么搜这里，如川菜"
            radius={6}
            color='#ee742f'
          ></Search>
          <HotCate></HotCate>
          <Top10 list={filterHotCate} onGotoDeatil={this.handleGotoDetail}></Top10>
        </main>
      </Container >
    )
  }
}

export default CookBook