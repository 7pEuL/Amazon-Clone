import React from "react";
import { useStateValue } from "../../../Provider/StateProvider";

import "./ShoppingCart.css";
import PreCheckOut from "../PreCheckOut/PreCheckOut";

const ShoppingCart = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <>
      <div className="ShoppingCart">
        {cart?.length === 0 ? (
          <div className="ShoppingCart__titleEmpty">
            <h3>Hello, {user ? user?.email : "Guest"}</h3>
            <h1>Your Amazon Cart is empty.</h1>
          </div>
        ) : (
          <div className="ShoppingCart__titleAdd">
            <h1 className="ShoppingCart__titleFull">Shopping Cart</h1>

            {cart?.map((item) => (
              <PreCheckOut
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                supPrice={item.supPrice}
                productPhoto={item.productPhoto}
                star={item.star}
                NoStar={item.NoStar}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
