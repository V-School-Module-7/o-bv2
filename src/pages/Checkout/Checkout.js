import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';
import GuestCheckout from "./GuestCheckout";
import { Container, Column, Text, Card, Button } from './CheckoutStyling';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51JleqCBQwcyFZrujsl24hf5gARibTD1ek6DZwZcnenUNpEF2b1mKifsWFy22BHDoJaRA8FtidLx20KvsLIieynO4007pOGyCMi')

function Checkout() {

//import summary component eventually
    return (
        <div className="checkoutContainer">
            <Container className="checkoutContainer">
                <Column>
                    <Card>
                    <GuestCheckout />
                    </Card>
                    <Card>
                    <Elements stripe={stripePromise}>
                    <CheckoutForm />
                    </Elements>
                    </Card>
                </Column>
            </Container>
        </div>

    );

}
export default Checkout;