import React from 'react';
import { Carousel } from 'antd-mobile';
import PropTypes from 'prop-types';
import { SwiperWrap } from '../StyleCookBook';


const Swiper = (props) => {
  return (
    <SwiperWrap>
      <Carousel
        autoplay={true}
        infinite
      >
        {
          props.list.length > 0 && props.list.map(item => (<img src={item.img} alt={item.title} key={item.id} onClick={props.onGotoDeatil(item.title, item.img)} />))
        }
      </Carousel>
    </SwiperWrap>
  )
};

Swiper.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Swiper
