import styled from 'styled-components';
import border from '@assets/styled/border';
import ellipsis from '@assets/styled/ellipsis';

const NavWarp = styled.div`
   width:100%;
   height:100%;
   display: flex;
   flex-direction: column;
   position: absolute;
   left:0;
   top:0;
   z-index:1;
  .am-navbar-drak {
    width: 100%;
    height: 4.4rem;
    background-color: #ee742f;
  }
  ul {
    flex:1;
    overflow-y:auto;
  }
`;
const SubTitle = ellipsis(
  styled.h2`
    font-size: 1.2rem;
    line-height:2.2rem;
    font-weight:normal;
  `);

const ListWarp = border(
  styled.li`
    display: flex;
    flex-direction:row;
    padding: 1rem;
    background-color:#ffffff;
    border-bottom: solid 1px #cccccc;
    img {
      width: 12rem;
      height: 6rem;
      margin-right:1.5rem; 
    }
    >div:last-child {
      display: flex;
      flex-direction: column;
      justify-ontent: center;
      align-items: flex-start;
      h1 {
        font-size: 1.4rem;
        line-height:2.2rem;
      }
      h3 {
        font-size:1rem;
        font-weight: normal;
        line-height:2.2rem;
        color: #cccccc;
      }
    }
`
);
export {
  NavWarp,
  SubTitle,
  ListWarp,
}