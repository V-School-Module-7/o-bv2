import React from 'react';
import { Background, Container, Img } from './ImgSliderStyling';
import bgImg from '../../images/PiperArrowIILeftSide.jpg';

function ImgSlider(props) {
  return (
    <Container>
      <Background bg={bgImg} />
      <Img src={bgImg} />
    </Container>
  );
}

export default ImgSlider;
