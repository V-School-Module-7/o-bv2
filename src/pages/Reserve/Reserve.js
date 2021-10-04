import React, { useState } from 'react';
import {
  Container,
  Column,
  Text,
  Bold,
  Img,
  Card,
  Button,
} from './ReserveStyling';
import planeImg from '../../images/1975PiperArrow1.jpg';
import DateTimePicker from 'react-datetime-picker';
import differenceInMinutes from 'date-fns/differenceInMinutes';

function Reserve(props) {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  function handleClick() {
    const hours = differenceInMinutes(end, start) / 60;
    console.log(start, end);
    console.log(`HOURS: ${hours}`, `COST: $${hours * 175}`);
  }

  return (
    <Container>
      <Column>
        <span>
          <Text as="h1" color="#E57879" fontSize={2.75} letterSpacing="0.8vw">
            SCHEDULE A FLIGHT
          </Text>
          <Img src={planeImg} />
          <Text as="h1" fontSize={2}>
            PIPER ARROW II
          </Text>
        </span>
      </Column>
      <Column>
        <span style={{ width: '100%' }}>
          <Card>
            <Text
              as="h1"
              color="#E57879"
              //   textAlign="justify"
              letterSpacing="0.25rem"
              fontSize={2}
            >
              PICK DATE & TIME
            </Text>
            <span>
              <Text as="h4" color="#929292" fontSize={1}>
                START
              </Text>
              <DateTimePicker onChange={setStart} value={start} />
            </span>
            <span>
              <Text as="h4" color="#929292" fontSize={1}>
                END
              </Text>
              <DateTimePicker onChange={setEnd} value={end} />
            </span>
            <Text as="h2" fontSize={1.5}>
              RESERVATION FEE - $10.00*
            </Text>
            <Text as="h1" color="#E57879" fontSize={2}>
              $175 PER HOUR
            </Text>
            <Button bgColor="#E57879" color="white" onClick={handleClick}>
              RESERVE FLIGHT
            </Button>
          </Card>
          <Text as="h3" fontSize={1.1}>
            *RESERVATION FEE DUE AT CHECKOUT
          </Text>
        </span>
      </Column>
    </Container>
  );
}

export default Reserve;
