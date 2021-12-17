import styled from 'styled-components';
import border from '@assets/styled/border';
import ellipsis from '@assets/styled/ellipsis';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  .am-navbar-drak {
    width: 100%;
    height: 4.4rem;
    line-height: 4.4rem;
    text-align: center;
    font-size: 1.6rem;
    background-color: #ee742f;
    color: #ffffff;
  }
  main {
    flex:1;
    overflow-y:auto;
  }
`;

const SwiperWrap = styled.div`
  height: 0;
  font-size: 0;
  padding-bottom: 73%;
  position: relative;
  .slider.am-carousel {
    position: static !important;
  }
`;
const H1Container = border(
  styled.h1`
  height: 4rem;
  padding-left:1rem;
  color:#666;
  line-height: 4rem;
  font-weight: normal;
  background-color:#ffffff;
  border-bottom: solid 1px #cccccc;
  `
);

const HotCateWrap = styled.div`
  > div {
    padding-top:1rem;
    background-color: #ffffff;
    .grid-item {
      padding-bottom:1rem;
      img {
        width: 5rem;
        height: 5rem;
        margin-bottom: .4rem;
        border-radius: .5rem;
        &[src = 'blank'] {
          display: none;
        }
      }
    }
    .am-grid-item-content {
      padding: 0 !important;
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center; 
    }
  }
`;

const SubTitle = ellipsis(
  styled.p``);
const Top10Warp = styled.div`
h1 {
  height: 4rem;
  padding-left:1rem;
  color:#666;
  line-height: 4rem;
  font-weight: normal;
}
ul {
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  padding-left: 1rem; 
  li {
    width: 50%;
    padding-right: 1rem; 
    img {
      width: 100%
    }
    >div:last-child {
      height: 4rem;
      background: #ffffff;
      margin-bottom: 1rem; 
      display: flex;
      flex-direction:column; 
      justify-content:center;
      align-items:center;
      >p:first-child {
        font-size: 1.4rem;
        margin-bottom: .5rem; 
      }
      >p:last-child {
        color: #cccccc;
      }  
    }
  }
}
`;
export {
  Container,
  SwiperWrap,
  H1Container,
  SubTitle,
  HotCateWrap,
  Top10Warp
}