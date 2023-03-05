import React from "react";
import { Chip } from "@mui/material";

import "./OrderSummary.css";

import { useStateValue } from "../../Provider/StateProvider";
import { getCartTotal } from "../../Reducer/reducer";
import CurrencyFormat from "react-currency-format";

const OrderSummary = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <>
      <CurrencyFormat
        renderText={(value) => (
          <div className="orderSummary">
            <div className="orderSummary__useThisAddress">
              <Chip
                label="Use this address"
                variant="outlined"
                onClick={"Use this address"}
              />
              <small>
                Choose an address to continue checking out. You'll still have a
                chance to review and edit your order before it's final.
              </small>
            </div>
            <div className="orderSummary__title">
              <h2>Order Summary</h2>
            </div>
            <div className="orderSummary__calculationWrap">
              <div className="orderSummary__calculationText">
                <li>Items ({cart.length}):</li>
                <li className="orderSummary__calculationTextShipping">
                  Shipping & handling:
                </li>
                <li>Total before tax:</li>
                <li>Estimated tax to be collected:*</li>
              </div>
              <div className="orderSummary__calculationMath">
                <li>{value}</li>
                <li className="orderSummary__calculationMathShipping">00.00</li>
                <CurrencyFormat
                  renderText={(value) => <li>{value}</li>}
                  value={getCartTotal(cart) + 10}
                  thousandSeparator={true}
                  displayType={"text"}
                  decimalScale={2}
                  prefix={"$"}
                />
                <li>10%</li>
              </div>
            </div>
            <div className="orderSummary__totalWrap">
              <div className="orderSummary__total">
                <li>
                  <b>Order total:</b>
                </li>
              </div>
              <div className="orderSummary__total">
                <CurrencyFormat
                  renderText={(value) => <li>{value}</li>}
                  value={getCartTotal(cart) - getCartTotal(cart) * 0.1 * 0.01}
                  thousandSeparator={true}
                  displayType={"text"}
                  decimalScale={2}
                  prefix={"$"}
                />
              </div>
            </div>
            <div className="orderSummary__question">
              <small>How are shipping costs calculated?</small>
            </div>
          </div>
        )}
        value={getCartTotal(cart)}
        thousandSeparator={true}
        displayType={"text"}
        decimalScale={2}
        prefix={"$"}
      />
    </>
  );
};

export default OrderSummary;
