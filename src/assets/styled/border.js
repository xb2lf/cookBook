import styled from 'styled-components';

const border = (WrapperComp) => {
  const EnhanceCopm = styled(WrapperComp)`
    position: relative;
    border-radius:${({ radius }) => radius || 0}rem;
    &::after {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    content: '';
    border-color: ${({ color }) => color || '#ccc'};
    border-style:${({ style }) => style || 'solid'};
    border-width: ${({ width }) => width || '1px'};
    @media (max--moz-device-pxiel-ratio: 1.49), (-webkit-max-device-pxiel-ratio: 1.49), (max-device-pxiel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {
      width: 100%;
      height: 100%;
      transform: scale(1);
      border-radius: ${({ radius }) => radius * 1 || 0}rem;
    }
    @media (min--moz-device-pxiel-ratio: 1.5) and -webkit-min-device-pxiel-ratio: 1.5) and(max--moz-device-pxiel-ratio: 2.49), (-webkit-max-device-pxiel-ratio: 2.49), (max-device-pxiel-ratio: 2.49), (min-resolution: 144dpi), (min-resolution: 1.5dppx) and(max-resolution: 2.49dppx) {
      width: 200%;
      height: 200%;
      transform: scale(.5);
      border-radius: ${({ radius }) => radius * 2 || 0}rem;
    }
    @media(min--moz-device-pxiel-ratio: 2.5), (-webkit-mmin-device-pxiel-ratio: 2.5), (min-device-pxiel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {
      width: 300%;
      height: 300%;
      transform: scale(0.3333333);
      border-radius: ${({ radius }) => radius * 3 || 0}rem;
    }
    transform-origin: 0 0;
  }
`;
  return EnhanceCopm
};

export default border