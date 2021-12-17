import React from 'react'
import { Container, InnerContainer } from './component/StyledSearch';

const Search = (props) => {
  const { title } = props;
  return (
    <Container {...props}>
      <InnerContainer {...props}>
        <svg t="1627416917430" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="986" width="200" height="200"><path d="M1005.312 914.752l-198.528-198.464A448 448 0 1 0 0 448a448 448 0 0 0 716.288 358.784l198.4 198.4a64 64 0 1 0 90.624-90.432zM448 767.936A320 320 0 1 1 448 128a320 320 0 0 1 0 640z" fill="#ee742f" p-id="987"></path></svg>
        <span>{title}</span>
      </InnerContainer>
    </Container>
  )
};

export default Search
