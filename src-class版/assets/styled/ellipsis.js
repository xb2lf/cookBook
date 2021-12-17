import styled from "styled-components";

const ellipsis = (WrapperComp) => {
  return styled(WrapperComp)`
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ lineNum }) => lineNum || 1};
    -webkit-box-orient: vertical;
  `
};

export default ellipsis