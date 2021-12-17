import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MenuList } from '@components';
import { get } from '@utils/http';

export default class Menu extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
  };
  state = {
    cate: null,
    curCate: '热门',
  };
  async componentDidMount() {
    const result = await get({
      url: '/api/category',
    });
    this.setState({
      cate: result.data.data,
    });
  }
  handleAsideClick = (value) => {
    this.setState({ curCate: value });
  };
  render() {
    const { cate, curCate } = this.state;
    const { type } = this.props;
    return (
      <div>
        <MenuList
          cate={cate}
          type={type}
          curCate={curCate}
          asideClick={this.handleAsideClick}
        ></MenuList>
      </div>
    )
  }
}
