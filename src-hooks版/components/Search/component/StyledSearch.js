import styled from 'styled-components';
import border from '@assets/styled/border';

const Container = styled.div` 
padding: 1rem 1.5rem;
background-color: ${props => props.outerbg}; 
`;

const InnerContainer = border(
  styled.div`
  display: flex;
  height: 4rem;
  border: ${props => props.hasborder ? 'solid 1px #ee742f' : ''};
  border-radius: .6rem;
  justify-content: center;
  align-items: center; 
  background-color: ${props => props.innerbg};  
  svg {
    width: 1.6rem;
    height: 1.6rem;
    margin-right: .6rem;
    fill: #ee742f;
  }
  span {
    font-size: 1.3rem;
    color: #ccc;
  }
`
);

export {
  Container,
  InnerContainer
}