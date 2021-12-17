import React from 'react'
import { NavBar } from 'antd-mobile';
import { NavWarp } from './component/StyleMap';

const Map = (props) => {
  return (
    <NavWarp>
      <NavBar
        mode="drak"
      >美食地图</NavBar>
      <iframe
        style={{ width: '100%', height: '100%' }}
        src="/map.html"
        title="cook-map"
        frameBorder="0"></iframe>
    </NavWarp>
  )
};

export default Map
