import React from "react"
import { Container, Column, Text, Card, Button } from './CheckoutStyling';

function Summary() {

    const style = {
        color: "black",
        border: "1px solid black"
    }
    return (
        <div style={style}>
            <p>Summary</p>
            <p>Reserved for this date</p>
            <p>Additional Information</p>
        </div>
    )
}

export default Summary