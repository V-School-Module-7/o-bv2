import React from 'react';
import { Container, Text, ImgList, Img, Card, Button } from './LandingStyling';
import Img1 from '../../images/PiperArrowIIRightSide.jpg';
import Img2 from '../../images/PiperArrowIICockpit.jpg';
import Img3 from '../../images/PiperArrowIILeftSide.jpg';

function Landing(props) {
  return (
    <Container>
      <Text as="h1" color="#E57879" fontSize="2em" justifySelf="start">
        O-D PLANE RENTAL
      </Text>
      <ImgList>
        <Img src={Img1} />
        <Img src={Img2} />
        <Img src={Img3} />
      </ImgList>
      <span>
        <Text as="h2" color="black" justifySelf="start" marginBottom="2rem">
          1975 PIPER ARROW II
        </Text>
        <Text as="p" color="black" fontWeight="bold">
          This beautiful 1975 Piper Arrow II 200 hp retractable complex plane.
          You can rent this plane out for business from instructing flight
          lessons or clocking your pilot hours day or night. You can also take
          the plane out for pleasure and enjoy a weekend up in Jackson Hole or a
          night down in ST. George; sky’s the limit.
        </Text>
      </span>
      <Card>
        <Text as="h1" color="black">
          $175 PER HOUR
        </Text>
        <Button bgColor="#E57879" color="#F5F5F5">
          RESERVE NOW
        </Button>
      </Card>
      <Text as="p" color="black" fontWeight="bold">
        *50 to 100 hour blocks are discounted | Overnight flights available 1
        week in advance
      </Text>
    </Container>
  );
}

export default Landing;
