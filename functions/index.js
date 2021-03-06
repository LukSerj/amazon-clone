const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51L0SsvBpIUe8lMLPKm6uRByD6W3pFIWwtu1W0KylVk4VzHzr8UgVoiNVczmwEz2QMAvzdxh5MwEQfRX8RG9nSS2p00aX2k6KZt')

// app config 
const app = express();

// middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes 
app.get('/', (request, response) => response.status(200).send ('hello world'))


app.post('/payments/create', async (request, response) => {
    const total = request.query.totalș
    console.log('Payment Reqest Received boom!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount : total,
        currency: "RON",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


//listen command
exports.api = functions.https.onRequest(app)
//example endpoint
// http://localhost:5001/clone-77a14/us-central1/api
