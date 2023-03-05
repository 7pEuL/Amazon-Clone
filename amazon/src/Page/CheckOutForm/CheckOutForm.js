import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";

import CheckOutNav from "../CheckOutNav/CheckOutNav";
import { useStateValue } from "../../Provider/StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import { db } from "../../FirebaseCompat";

import "./CheckOutForm.css";
import OrderSummary from "../OrderSummary/OrderSummary";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://eyupigeon.com/" target="blank">
        Eyu-Tech
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

const CheckOutForm = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const [activeStep, setActiveStep] = React.useState(0);
  const [succeeded, setSucceeded] = React.useState(null);
  const [processing, setProcessing] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [disabled, setDisabled] = React.useState(true);
  const [clientSecret, setClientSecret] = React.useState(true);

  const stripe = useStripe();
  const elements = useElements();

  const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => Number(item.price) + amount, 0);

  React.useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/Payments/Create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);

  console.log(`THE SECRET is -->`, clientSecret);
  console.log(`Person -->`, user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // const payload =
    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_CART",
        });

        navigate("/Orders");
      });
  };

  const handleOrder = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
    navigate("/Orders");
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  // const handleNextForm = (e) => {
  //   e.preventDefault();
  //   setActiveStep(activeStep + 1);
  // };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Typography variant="" color="inherit" noWrap>
          <CheckOutNav />
        </Typography>
      </AppBar>

      {/* <OrderSummary /> */}

      <div className="checkOutLocation">
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Checkout (
              <Link style={{ textDecoration: "none" }} to="/Cart">
                {cart.length} items
              </Link>
              )
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2023_
                  {Math.floor(Math.random() * 10000)}
                  Eyu-Tech. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
                <Button
                  className="submitButton"
                  variant="contained"
                  onClick={handleOrder}
                  sx={{ mt: 1, ml: 22 }}
                >
                  See your order
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  {activeStep === steps.length - 1 ? (
                    <form className="Order__Form" onSubmit={handleSubmit}>
                      <CardElement
                        className="Order__FormCardInput"
                        onChange={handleChange}
                      />

                      <div style={{ marginTop: "3px" }} className="orderButton">
                        <Button
                          disabled={processing || disabled || succeeded}
                          className="submitButton"
                          type="submit"
                          variant="contained"
                          // onClick={handleNextForm}
                          sx={{ mt: 1, ml: 13 }}
                        >
                          {processing ? "Processing" : "Place order"}
                        </Button>
                      </div>

                      {/* Errors */}
                      {error && (
                        <div className="Order__FormCardError">{error}</div>
                      )}
                    </form>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              </React.Fragment>
            )}
          </Paper>
          <Copyright />
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default CheckOutForm;
