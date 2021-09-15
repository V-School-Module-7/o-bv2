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
      <div
        style={{
          width: '80%',
          display: 'grid',
          gridTemplateColumns: '3fr 2fr',
        }}
      >
        <Column>
          <Text as="h1" color="#E57879" fontSize="3rem" letterSpacing="0.5rem">
            SCHEDULE A FLIGHT
          </Text>
          <Img src={planeImg} />
          <Text as="h1">PIPER ARROW II</Text>
        </Column>
        <Column>
          <Card>
            <Text
              as="h1"
              color="#E57879"
              //   textAlign="justify"
              letterSpacing="0.25rem"
              fontSize="2.5rem"
            >
              PICK DATE & TIME
            </Text>
            <span>
              <Text as="h4" color="#929292">
                START
              </Text>
              <DateTimePicker onChange={setStart} value={start} />
            </span>
            <span>
              <Text as="h4" color="#929292">
                END
              </Text>
              <DateTimePicker onChange={setEnd} value={end} />
            </span>
            <Text as="h2">RESERVATION FEE - $10.00*</Text>
            <Text as="h1" color="#E57879">
              $175 PER HOUR
            </Text>
            <Button bgColor="#E57879" color="white" onClick={handleClick}>
              RESERVE FLIGHT
            </Button>
          </Card>
          <Text as="h3">*RESERVATION FEE DUE AT CHECKOUT</Text>
        </Column>
      </div>
    </Container>
  );
}

export default Reserve;
