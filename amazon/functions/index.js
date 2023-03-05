const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51MXrGRI9zUlgoAj0HtGlClXZ6v9YNip3LT4Owj65i23wZDSS1uQ6tosXalIlQNg8g1nqRkMbm4ATiFtj8Xx098RB00Vuhea2eD"
);

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Fancy Pigeon"));

app.post("/Payments/Create", async (req, res) => {
  const total = req.query.total;

  console.log(`Payment Request Received for this amount -->`, total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/clone-85b58/us-central1/api
