import React from 'react';
import { Carousel } from 'antd-mobile';
import { SwiperWrap } from '../StyleCookBook';


const Swiper = (props) => {
  //因为使用第三方组件库(antd-m),而第三方组件库要求必须使用原生
  //所以我们需要将immutable转化为原生JS
  const list = props.list.toJS();
  return (
    <SwiperWrap>
      <Carousel
        autoplay={true}
        infinite
      >
        {
          list.length > 0 && list.map(item => (<img src={item.img} alt={item.title} key={item.id} onClick={props.onGotoDeatil(item.title, item.img)} />))
        }
      </Carousel>
    </SwiperWrap>
  )
};

export default Swiper
