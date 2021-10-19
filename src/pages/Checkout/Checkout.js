import React, { useState } from 'react';
import axios from "axios";
import { withRouter, Router } from 'react-router-dom';
import BillingDetailsInfo from './BillingDetailsInfo';
import CheckoutError from './ErrorCheckout';

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

function Checkout(price, onSuccessfulCheckout) {
    const [isProcessing, setProcessingTo] = useState(false);
    const [checkoutError, setCheckoutError] = useState();

    const stripe = useStripe();
    const elements = useElements();

    // TIP
    //use the cardElements onChange prop to add a handler
    // for setting any errors:

    const handleCardDetailsChange = ev => {
        ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
    };

    const handleFormSubmit = async ev => {
        ev.preventDefault();

        const billingDetails = {
            name: ev.target.name.value,
            email: ev.target.email.value,
            address: {
                city: ev.target.city.value,
                line1: ev.target.address.value,
                state: ev.target.state.value,
                postal_code: ev.target.zip.value
            }
        };

        setProcessingTo(true);

        const cardElement = elements.getElement("card");

        try {
            const { data: clientSecret } = await axios.post("./api/payment_intents", {
                amount: 10 * 100
            });

            const paymentMethodReq = await stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
                billing_details: billingDetails
            });

            if (paymentMethodReq.error) {
                setCheckoutError(paymentMethodReq.error.message);
                setProcessingTo(false);
                return;
            }

            const { error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethodReq.paymentMethod.id
            });

            if (error) {
                setCheckoutError(error.message);
                setProcessingTo(false);
                return;
            }

            onSuccessfulCheckout();
        } catch (err) {
            setCheckoutError(err.message);
        }
    };

    const cardElementOpts = {
        iconStyle: "solid",
        hidePostalCode: true
    };
    return (
        <Container>
            <p>Payment</p>
            <Column className="checkout">
                <span style={{ width: '100%' }}>
                    <Card className="checkoutSpan">
                        <form onSubmit={handleFormSubmit}  onSuccessfulCheckout={() => Router.push("/Confirmation")} style={{marginTop: "80px"}}>
                            <Text as="h1" color="#E57879" letterSpacing="0.25rem" fontSize={2}>
                                Payment
                            </Text>
                            <BillingDetailsInfo/>
                            <CardElement options={cardElementOpts} onChange={handleCardDetailsChange} />
                            {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
                            <Button bgColor="#E57879" color="white" type="submit" disabled={isProcessing || !stripe}>
                                {isProcessing ? "Processing..." : "Pay $10.00"}
                            </Button>
                        </form>
                    </Card>
                </span>
            </Column>
        </Container>
    );
}

export default withRouter(Checkout);