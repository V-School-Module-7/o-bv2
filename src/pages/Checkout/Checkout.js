import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import {
    Container,
    Column,
    Text,
    Card,
    Button,
} from './CheckoutStyling';

import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

function Checkout(props) {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };

    return (
        <Container>
            <p>Payment</p>
            <Column>
                <span style={{ width: '100%' }}>
                    <Card>
                        <form onSubmit={handleSubmit}>
                            <Text as="h1" color="#E57879" letterSpacing="0.25rem" fontSize={2}>
                                Payment
                                <Text as="h2" fontSize={0.5}>RESERVATION FEE - $10.00*</Text>
                            </Text>
                            <input style={{ margin: "10px", padding: "10px", border: 'none' }}
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                as="h4" color="#929292" fontSize={1}>
                            </input>
                            <CardElement />
                            <Button bgColor="#E57879" color="white" type="submit" disabled={!stripe || !elements}>
                                Pay
                            </Button>
                        </form>
                    </Card>
                </span>
            </Column>
        </Container>
    );
}

export default withRouter(Checkout);