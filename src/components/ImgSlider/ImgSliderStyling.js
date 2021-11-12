import styled from 'styled-components';
import bgImg from '../../images/PiperArrowIILeftSide.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 22rem;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bg && props.bg});
  background-size: contain;
  background-position: center;
  filter: blur(3px) brightness(0.4);
`;

export const Img = styled.img`
  height: 100%;
  object-fit: contain;
  filter: blur(0px);
  box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.3);
`;
