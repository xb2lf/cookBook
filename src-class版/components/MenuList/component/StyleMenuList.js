import styled from 'styled-components';

const MenuWarp = styled.div`
   height: 100%
   overflow-y: hidden;
   flex: 1;
   display: flex;
   border-top: solid 1px #cccccc;
   aside {
     width: 9rem;
     height: 42rem;
     overflow-y: auto; 
     ul {
       li {
         height: 5rem;
         line-height: 5rem;
         text-align: center;
         font-size: 1.3rem;
         &.active {
           background-color:#ffffff;
           color: #ee743f;
           span {
             display: inline-block;
             height: 100%;
             border-bottom: solid 1px #ee742f;
           }
         }
       }
     }
   }
   section {
    height: 42rem;
     flex: 1;
     padding: 2.2rem 1.6rem 1.6rem 1.6rem;
     box-sizing:border-box; 
     background-color: #ffffff; 
     overflow-y: auto; 
     ul {
       display: flex;
       flex-wrap: wrap;
       li {
         width: 33.33333%;
         height: 3.2rem;
         text-align: center;
         overflow-y: auto; 
       }
     }
   }
`;

export {
  MenuWarp,
}