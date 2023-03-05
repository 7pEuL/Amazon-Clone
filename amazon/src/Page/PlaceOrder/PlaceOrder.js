import React from "react";
import "./PlaceOrder.css";

import { useStateValue } from "../../Provider/StateProvider";
import CheckOutSummary from "../CheckOutSummary/CheckOutSummary";
// import CheckoutPage from "../CheckOutSummary/CheckOutPage";
// import OrderSummary from "../OrderSummary/OrderSummary";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import Header from "../../Components/Header/Header";
import Gift from "../Cart/Gift/Gift";
import RelatedItems from "../RelatedItems/RelatedItems";

const PlaceOrder = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ cart }, dispatch] = useStateValue();

  return (
    <>
      {cart?.length === 0 ? (
        <>
          <Header />
          <Gift />
          <RelatedItems />
        </>
      ) : (
        ""
      )}

      <div className="PlaceOrder">
        {cart?.length === 0 ? (
          <>
            <div className="PlaceOrder__titleEmpty">
              <h1>Your Amazon Cart is empty.</h1>
            </div>
          </>
        ) : (
          <>
            {/* <OrderSummary /> */}
            <CheckOutForm />
            <div className="PlaceOrder__titleAdd">
              <h1 className="PlaceOrder__titleFull">Shopping Cart</h1>

              {cart?.map((item) => (
                <CheckOutSummary
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
          </>
        )}
      </div>
    </>
  );
};

export default PlaceOrder;
