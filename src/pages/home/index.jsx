import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

const Home = (props) => {
  const state = useSelector(state => state);
  const [tabs, setTabs] = useState(
    {
      selectedTab: state.getIn(['category', 'routerInfo', 'selectedTab']),
      hidden: false,
    });
  const dispatch = useDispatch();
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
      selected={tabs.selectedTab === 'cookbook'}
      onPress={() => {
        setTabs({
          selectedTab: 'cookbook',
        });
        dispatch(changeSelectedTab('cookbook'));
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
      selected={tabs.selectedTab === 'category'}
      onPress={() => {
        setTabs({
          selectedTab: 'category',
        });
        dispatch(changeSelectedTab('category'));
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
      selected={tabs.selectedTab === 'map'}
      onPress={() => {
        setTabs({
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
      selected={tabs.selectedTab === 'more'}
      onPress={() => {
        setTabs({
          selectedTab: 'more',
        });
      }}
    >
      <More />
    </TabBar.Item>
  ];
  return (
    <div style={{ position: 'fixed', zIndex: 2, height: '100%', width: '100%', top: 0, overflowY: 'hidden' }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#FF5B05"
        barTintColor="white"
        noRenderContent={false}
        prerenderingSiblingsNumber={Infinity}
        tabBarPosition="bottom"
        hidden={tabs.hidden}
      >
        {
          state.getIn(['home', 'checked']) ? tabItems.map(v => v) : tabItems.filter((v, i) => i !== 2)
        }
      </TabBar>
    </div >
  );
};

export default animate(Home)
