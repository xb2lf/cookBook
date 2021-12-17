import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TabBar } from 'antd-mobile';
import {
  cookbook,
  cookbookActive,
  category,
  categoryActive,
  location,
  locationActive,
  more, moreActive,
} from '@assets/images/';
import CookBook from '../cookBook';
import CateGory from '../category';
import Map from '../map';
import More from '../more';
import { animate } from '@components';
import '../../assets/styles/index.css';
import { changeSelectedTab } from '@/pages/category/model/actionCreator';

@connect(
  state => ({
    checked: state.home.checked,
    selectedTab: state.category.routerInfo.selectedTab,
  }),
  dispatch => ({
    chnageSelectTab(selectTab) {
      dispatch(changeSelectedTab(selectTab));
    },
  })
)
@animate
class Home extends Component {
  state = {
    selectedTab: this.props.selectedTab,
    hidden: false,
    fullScreen: true,
  };
  componentDidMount() {

  }
  render() {
    const { checked, chnageSelectTab } = this.props;
    const tabItems = [
      <TabBar.Item
        title="美食大全"
        key="CookBook"
        icon={<div style={{
          width: '24px',
          height: '24px',
          background: `url(${cookbook}) center center /  24px 24px no-repeat`
        }}
        />
        }
        selectedIcon={<div style={{
          width: '24px',
          height: '24px',
          background: `url(${cookbookActive}) center center /  24px 24px no-repeat`
        }}
        />
        }
        selected={this.state.selectedTab === 'cookbook'}
        onPress={() => {
          this.setState({
            selectedTab: 'cookbook',
          });
          chnageSelectTab('cookbook');
        }}
        data-seed="logId"
      >
        <CookBook />
      </TabBar.Item>,

      <TabBar.Item
        icon={
          <div style={{
            width: '24px',
            height: '24px',
            background: `url(${category}) center center /  24px 24px no-repeat`
          }}
          />
        }
        selectedIcon={
          <div style={{
            width: '24px',
            height: '24px',
            background: `url(${categoryActive}) center center /  24px 24px no-repeat`
          }}
          />
        }
        title="分类"
        key="Category"
        selected={this.state.selectedTab === 'category'}
        onPress={() => {
          this.setState({
            selectedTab: 'category',
          });
          chnageSelectTab('category');
        }}
        data-seed="logId1"
      >
        <CateGory />
      </TabBar.Item>,

      <TabBar.Item
        icon={
          <div style={{
            width: '24px',
            height: '24px',
            background: `url(${location}) center center /  24px 24px no-repeat`
          }}
          />
        }
        selectedIcon={
          <div style={{
            width: '24px',
            height: '24px',
            background: `url(${locationActive}) center center /  24px 24px no-repeat`
          }}
          />
        }
        title="美食地图"
        key="Map"
        selected={this.state.selectedTab === 'map'}
        onPress={() => {
          this.setState({
            selectedTab: 'map',
          });
        }}
      >
        <Map />
      </TabBar.Item>,

      <TabBar.Item
        icon={{ uri: more }}
        selectedIcon={{ uri: moreActive }}
        title="更多"
        key="More"
        selected={this.state.selectedTab === 'more'}
        onPress={() => {
          this.setState({
            selectedTab: 'more',
          });
        }}
      >
        <More />
      </TabBar.Item>
    ];
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', zIndex: 2, height: '100%', width: '100%', top: 0, overflowY: 'hidden' } : {
        height: 400
      }
      }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#FF5B05"
          barTintColor="white"
          noRenderContent={false}
          prerenderingSiblingsNumber={Infinity}
          tabBarPosition="bottom"
          hidden={this.state.hidden}
        >
          {
            checked ? tabItems.map(v => v) : tabItems.filter((v, i) => i !== 2)
          }
        </TabBar>
      </div >
    );
  }
}

export default Home
