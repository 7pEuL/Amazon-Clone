/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { auth } from "./Firebase";
import { useStateValue } from "./Provider/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Cart from "./Page/Cart/Cart";
import CheckOut from "./Page/CheckOut/CheckOut";
import SignIn from "./Page/SignIn/SignIn";
import Orders from "./Page/Orders/Orders";

const stripePromise = loadStripe(
  `pk_test_`
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  console.log(`THE USER is -->`, user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(`This User `, authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="/Cart" element={<Cart />} />
            </Route>

            <Route
              path="/Payment"
              element={
                <Elements stripe={stripePromise}>
                  <CheckOut />
                </Elements>
              }
            />

            <Route path="/SignIn" element={<SignIn />} />

            <Route
              path="/Orders"
              element={
                <>
                  <Header />
                  <Orders />
                </>
              }
            />

            <Route
              path="*"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;