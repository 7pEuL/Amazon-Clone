import React from "react";

import "./CheckOutSummary.css";

import { Button, Checkbox } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import QuantityButton from "../Cart/QuantityButton/QuantityButton";
import { useStateValue } from "../../Provider/StateProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOutSummary = ({ id, title, price, productPhoto, hideElements }) => {
  const [{ cart, user }, dispatch] = useStateValue();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const navigate = useNavigate();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });

    !user.email && toast.warn(`Removing from Cart!`);
    user.email && toast.warn(`Removing from ${user.email} Cart!`);
  };

  const saveMessage = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });

    user.email && toast.info(`Saving for Later`);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      <div className="checkout">
        <div className="checkout__img">
          <img src={productPhoto} alt="" />
        </div>

        <div className="checkout__detail">
          <div className="checkout__title">{truncate(title, 70)}</div>

          {!hideElements && (
            <>
              <div className="checkout__inStock">In Stock</div>
              <div className="checkout__shipping">
                Eligible for FREE Shipping
              </div>
              <div className="checkout__itemsCheckBox">
                <Checkbox {...label} size="small" />
                <b>This is a Gift</b>{" "}
                <Link to="/how_to_send_gift_">Learn more</Link>
              </div>
              <div className="checkout__addRemoveSave">
                <div className="checkout__quantityButton">
                  <QuantityButton />
                </div>

                <div className="checkout__delete">
                  <Button
                    onClick={removeFromCart}
                    variant="outlined"
                    color="error"
                  >
                    Delete
                  </Button>
                </div>

                <div className="checkout__save">
                  <Button
                    onClick={saveMessage}
                    variant="outlined"
                    color="success"
                  >
                    Save for Later
                  </Button>
                </div>
              </div>

              <div className="checkout__compare">
                <Link to="/compare_with_similar_items">
                  Compare with similar items
                </Link>
              </div>
            </>
          )}
        </div>

        <div className="checkout__price">
          <h3>${price}</h3>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover="false"
        theme="colored"
      />
    </>
  );
};

export default CheckOutSummary;
