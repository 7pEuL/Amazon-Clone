import React from "react";
import CurrencyFormat from "react-currency-format";

import "./Gift.css";

import images from "../../../Data/Images";
import { Button } from "@mui/material";
import { useStateValue } from "../../../Provider/StateProvider";
import { getCartTotal } from "../../../Reducer/reducer";

const Gift = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="cart">
              <div className="cart__gift">
                <div className="cart__giftCard">
                  {/* <img src={images.AmazonGiftCard} alt="" /> */}
                  <img src={images.AmazonGiftCardYellow} alt="" />
                </div>
                <div className="cart__giftDescription">
                  <div>
                    Get a <b>$50 Amazon Gift Card instantly</b> upon approval
                    for the <strong>Amazon Rewards Visa Card</strong>
                  </div>
                </div>

                {cart.length !== 0 && (
                  <>
                    <div className="giftHide">
                      <div className="">
                        <li>Current Total: </li>
                        <li>Gift Card Savings:</li>
                        <li>
                          <b>Cost After Savings:</b>
                        </li>
                      </div>

                      <div className="giftHide__flex">
                        <li>${value}</li>
                        <li className="cart__giftValue">- $50.00</li>
                        {{ value } - 50 === -50 ? (
                          <li>${0}</li>
                        ) : (
                          <li>
                            <b>${value - 50}</b>
                          </li>
                        )}
                      </div>
                    </div>

                    <div className="cart__giftMath">
                      <li>Current Total: </li>
                      <li>Gift Card Savings:</li>
                      <li>
                        <b>Cost After Savings:</b>
                      </li>
                    </div>
                    <div className="cart__giftMath cart__giftMathResult">
                      <li>${value}</li>
                      <li className="cart__giftValue">- $50.00</li>
                      {{ value } - 50 === -50 ? (
                        <li>${0}</li>
                      ) : (
                        <li>
                          <b>${value - 50}</b>
                        </li>
                      )}
                    </div>
                  </>
                )}

                <Button
                  className="cart__giftButton"
                  variant="outlined"
                  color="info"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </>
        )}
        value={getCartTotal(cart)}
        // thousandSeparator={true}
        displayType={"text"}
        decimalScale={2}
        prefix={""}
      />
    </>
  );
};

export default Gift;
