
import { useState, useEffect } from "react";
import { Container } from './CheckoutStyling';

export default Confirmation = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 100);
  });

  return (
    <div title="Success!">
      <Container>
        <title>Reservation Confirmed!</title>
        <message>Stripe has successfully processed your payment</message>
      </Container>
    </div>
  );
};