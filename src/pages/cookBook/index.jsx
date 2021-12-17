import React from 'react';
import memozie from 'memoize-one';
import { NavBar } from 'antd-mobile';
import { Container } from './component/StyleCookBook';
import { Swiper, HotCate, Top10, useGetState, useGotoDetail } from './component';
import { Search } from '@components';

const CookBook = (props) => {
  const { list } = useGetState();
  const { handleGotoDetail } = useGotoDetail();
  const swiper = memozie((list) => list.slice(0, 5));
  const hotCate = memozie((list) => list.slice(0, 10));
  const filterSwiper = swiper(list);
  const filterHotCate = hotCate(list);
  return (
    <Container>
      <NavBar
        mode="drak"
      >美食大全</NavBar>
      <main>
        <Swiper list={filterSwiper} onGotoDeatil={handleGotoDetail}></Swiper>
        <Search
          outerbg="#f5f5f9"
          innerbg="#ffffff"
          hasborder={true}
          title="爱吃什么搜这里，如川菜"
          radius={6}
          color='#ee742f'
        ></Search>
        <HotCate></HotCate>
        <Top10 list={filterHotCate} onGotoDeatil={handleGotoDetail}></Top10>
      </main>
    </Container >
  )
};

export default CookBook