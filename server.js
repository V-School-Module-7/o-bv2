const express = require('express');
const app = express();
const { resolve } = require('path');
const { bodyParser } = require("body-parser")
const cors = require('cors')({ origin: true });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

app.post("/payment", cors(), async (req, res) => {
  let { amount, id, billing_details} = req.body
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      description: 'Reservation Fee',
      billing_details,
      payment_method: id,
      confirm: true
    })

    console.log("Payment", payment)
    res.json({
      message: "Payment Successful",
      success: true
    }
    )
  } catch {
    console.log("Error", error)
    res.json({
      message: "Payment Failed",
      success: false
    })
  }
})

app.listen(process.env.PORT || 3000, () =>
  console.log(`Node server listening at http://localhost:3000`)
);