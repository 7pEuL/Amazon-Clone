import React from "react";

import "./Cart.css";
import Gift from "./Gift/Gift";
import Subtotal from "./Subtotal/Subtotal";
import RelatedItems from "../RelatedItems/RelatedItems";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

const Cart = () => {
  return (
    <>
      <Gift />
      <Subtotal />
      <ShoppingCart />
      <RelatedItems />
    </>
  );
};

export default Cart;
