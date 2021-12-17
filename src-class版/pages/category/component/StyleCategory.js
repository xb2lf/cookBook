import styled from 'styled-components';

const CategoryWrap = styled.div`
   height:100%;
   display: flex;
   flex-direction: column;
   nav{
    width: 100%;
    height: 4.4rem;
    background-color: #ee742f;
    display: flex;
    justify-content: center;
    align-items: center; 
    ul {
      display: flex;
      justify-content: center; 
      width: 14rem;
      border: solid 1px #ffffff;
      border-radius: 1.5rem;
      position: relative;
      li {
        flex: 1;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        color: #ffffff;
        font-size: 1.4rem;
        transition: all 200ms ease-in;
        &.active {
          color: #ee742f;
          z-index:3;
        }
        &.slide {
          position: absolute;
          width: 7rem;
          height: 3rem;
          background-color: #ffffff; 
          border-radius: 1.5rem;
          left: 0;
          z-index: 2;
        }
        &.slide.right {
          left: 7rem;
        }
      }
    }
  }
  main {
    flex:1;
    overflow-y:hidden;
  }
`;

export {
  CategoryWrap,
}