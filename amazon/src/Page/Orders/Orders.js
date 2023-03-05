import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useStateValue } from "../../Provider/StateProvider";

import "./Orders.css";
import { db } from "../../FirebaseCompat";
import Order from "./Order";

const Orders = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <React.Fragment>
      <div className="myOrder">
        {orders.length !== 0 ? (
          <React.Fragment>
            <div className="myOrder__thankYou">
              {console.table(orders)}

              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2023_{Math.floor(Math.random() * 10000)}
                Eyu-Tech. We have emailed your order confirmation, and will send
                you an update when your order has shipped.
              </Typography>
            </div>

            <div className="orders">
              <h1>Your Orders</h1>
              <div className="orders__order">
                {orders?.map((order) => (
                  <Order order={order} />
                ))}
              </div>
            </div>
          </React.Fragment>
        ) : (
          <>
            <div className="myOrder__thankYou">
              {/* {console.table(orders)} */}

              <Typography variant="h5" gutterBottom>
                Your have No Orders.
              </Typography>
              <Typography variant="subtitle1">
                Your need to Sign-in before you order something from our Shop.
                When you Sign-in and Order something, We will send you an email
                your order confirmation, and will send you an update when your
                order has shipped.
              </Typography>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default Orders;
