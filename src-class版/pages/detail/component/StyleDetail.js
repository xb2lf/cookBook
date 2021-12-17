import styled from 'styled-components';

const NavWarp = styled.div`
   width: 100%;
   height:100%;
   display: flex;
   flex-direction: column;
   position: absolute;
    top:0;
    left:0;
  .am-navbar-drak {
    width: 100%;
    height: 4.4rem;
    background-color: #ee742f;
  }
  main {
    flex:1;
    overflow-y:auto;
    img {
      width: 100%;
    }
    .details {
      width: 100%;
      height:12rem;
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items:center;
      background-color:#ffffff;
      margin-bottom:1rem; 
      h1 {
        font-size: 1.6rem;
        line-height:2.4rem;
      }
      h3 {
        font-size:1.2rem;
        font-weight: normal;
        line-height:2rem;
        color: #cccccc;
        margin:1rem;
      }
      button {
        width: 10rem;
        height:4rem;
        background-color: #ee742f;
        color:#ffffff;
        border: none;
        border-radius: 0.55rem;
        font-size:1.6rem; 
      }   
    }
    .experiences {
      width: 100%;
      padding: 2rem 3rem;
      box-sizing:border-box;
      display: flex;
      flex-direction:column;
      justify-content:flex-start;
      align-items:center;  
      background-color:#ffffff; 
      h1 {
        font-size: 1.6rem;
        line-height:2.4rem;
        margin-bottom:2rem;
      }
      .article {
        p {
          font-size:1.4rem;
          text-indent:2.8rem;
        }
      }
    }
  }
`;

export {
  NavWarp,
}