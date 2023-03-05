import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import SendIcon from "@mui/icons-material/Send";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox } from "@mui/material";
import { useStateValue } from "../../../Provider/StateProvider";
import { getCartTotal } from "../../../Reducer/reducer";

const Subtotal = () => {
  const navigate = useNavigate();
  const [{ cart }, dispatch] = useStateValue();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <CurrencyFormat
        renderText={(value) => (
          <>
            {cart.length !== 0 && (
              <div className="subtotalDiv">
                <div className="subtotal">
                  <div className="subtotal__shipping">
                    <CheckCircleOutlineRoundedIcon color="success" />
                    <p>
                      <b>Your order qualifies for FREE Shipping.</b>
                      Choose this option at checkout.
                      <Link to="/"> See details</Link>
                    </p>
                  </div>

                  <div className="subtotal__items">
                    <h5>
                      Subtotal ({cart.length} items): <b>{value}</b>
                    </h5>
                    <div className="subtotal__itemsCheckBox">
                      <Checkbox {...label} size="small" />
                      This Order Contains a Gift
                    </div>
                  </div>

                  <div className="subtotal__button">
                    {cart?.length !== 0 ? (
                      // <Link to={"/Cart/Checkout"}>
                      <Button
                        onClick={(e) => navigate("/Payment")}
                        color="success"
                        variant="contained"
                        endIcon={<SendIcon />}
                      >
                        Proceed to checkout
                      </Button>
                    ) : (
                      /* </Link> */
                      ""
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
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

export default Subtotal;
