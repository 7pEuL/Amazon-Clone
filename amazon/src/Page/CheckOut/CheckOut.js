import React from "react";
import "./CheckOut.css";

import { useStateValue } from "../../Provider/StateProvider";
import OrderSummary from "../OrderSummary/OrderSummary";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import Header from "../../Components/Header/Header";
import Gift from "../Cart/Gift/Gift";
import RelatedItems from "../RelatedItems/RelatedItems";
import Subtotal from "../Cart/Subtotal/Subtotal";

const CheckOut = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <>
      <div className="CheckOut">
        {cart?.length === 0 ? (
          <>
            <Header />
            <Gift />
            <div className="CheckOut__titleEmpty">
              <h3>Hello, {user ? user?.email : "Guest"}</h3>
              <h1>Your Amazon Cart is empty.</h1>
            </div>
            <Subtotal />
            <br />
            <RelatedItems />
          </>
        ) : (
          <>
            <div className="OrderSummaryDiv">
              <OrderSummary />
            </div>
            <div className="CheckOutFormDiv">
              <CheckOutForm />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CheckOut;
