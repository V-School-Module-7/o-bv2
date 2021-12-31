import React, { useState } from 'react';
import Summary from './Summary'
import { Container, Column, Text, Card, Button } from './CheckoutStyling';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from "axios";

const initInputs = {
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: ""
}

function CheckoutForm(props) {
    const [isProcessing, setProcessingTo] = useState(false);
    const [success, setSuccess] = useState(false)
    const [inputs, setInputs] = useState(initInputs)
    const stripe = useStripe();
    const elements = useElements();


    function handleChange(e) {
        console.log(e.target.value)
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))

    }
    const style = {
        padding: "2px",
        margin: "5px",
        width: "300px",
        border: "none, none, 0px, none",
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("/payment", {
                    amount: 1000,
                    currency: 'usd',
                    id
                })

                if (response.data.sucess) {
                    console.log("Successful Paymnet")
                    setSuccess(true)
                }
            } catch (error) {
                console.log("Error", error)
                setProcessingTo(false)
            }
        } else {
            console.log(error.message)
        }
    }
    const cardElementOpts = {
        iconStyle: "solid",
        hidePostalCode: true
    };
    return (
        <>
            <Text as="h1" color="black" letterSpacing="0.25rem" fontSize={2}>
                Guest Checkout
            </Text>
            <form onSubmit={handleSubmit} style={{ marginTop: "80px" }}>
                <input style={style}
                    name="name"
                    value={inputs.name}
                    label="name"
                    type="text"
                    placeholder="Full Name"
                    onChange={handleChange}
                    required
                />
                <input style={style}
                    name="email"
                    value={inputs.email}
                    label="email"
                    type="email"
                    placeholder="jane.doe@example.com"
                    onChange={handleChange}
                    required
                />
                <input style={style}
                    name="address"
                    value={inputs.address}
                    label="Address"
                    type="text"
                    placeholder="Address"
                    onChange={handleChange}
                    required
                />
                <input style={style}
                    name="city"
                    value={inputs.city}
                    label="City"
                    type="text"
                    placeholder="City"
                    onChange={handleChange}
                    required
                />
                <input style={style}
                    name="state"
                    value={inputs.state}
                    label="State"
                    type="text"
                    placeholder="State"
                    onChange={handleChange}
                    required
                />
                <input style={style}
                    name="zip"
                    value={inputs.zip}
                    label="ZIP"
                    type="text"
                    placeholder="Zip Code"
                    onChange={handleChange}
                    required
                />
                <CardElement id="card-element" options={cardElementOpts} />
                <Button bgColor="#E57879" color="white" type="submit" disabled={isProcessing || !stripe}>
                {isProcessing ? "Processing..." : "Pay $10.00 Reservation"}
            </Button>
            </form>
            <Summary />
        </>
    )

}
export default CheckoutForm;