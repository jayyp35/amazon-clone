const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const { response } = require("express");
const stripe = require('stripe')
('sk_test_51IS2W9JYfGEPJXwNGRg14NSLGlCagfV1BHVSBI9OYXpzhmIckj7PYE1e44Hp5KOhYBKHABA2SyFPeTfLkSzwRb4L00fgjeQE7M')

//API

//--APP config
const app = express();
//--Middlewares
app.use(cors({origin:true}))
app.use(express.json())


//--Api routes
app.get('/',(request,response)=> response.status(200).send
('hello world'))

app.post('/payments/create', async(req,res) => {
    const total = req.query.total;
    console.log("payment request recieved :) !!!", total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount:total,
        currecy:"usd"
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

//--listen command
exports.api = functions.https.onRequest(app)


