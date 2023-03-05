import React from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import CheckOutSummary from "../CheckOutSummary/CheckOutSummary";

import "./Order.css";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>

      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

      <p className="order__id">
        <small>{order.id}</small>
      </p>

      {order.data.cart?.map((item) => (
        <CheckOutSummary
          id={item.id}
          title={item.title}
          price={item.price}
          productPhoto={item.productPhoto}
          hideElements
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={(order.data.amount / 100) - ((order.data.amount / 100) * 0.01)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;
