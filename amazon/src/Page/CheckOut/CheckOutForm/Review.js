import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useStateValue } from "../../Provider/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../Reducer/reducer";
import CheckOutSummary from "../CheckOutSummary/CheckOutSummary";

import "./Review.css";

const products = [
  {
    name: "Product 1",
    desc: "A nice thing",
    price: "$9.99",
  },
  {
    name: "Product 2",
    desc: "Another thing",
    price: "$3.45",
  },
  {
    name: "Product 3",
    desc: "Something else",
    price: "$6.51",
  },
  {
    name: "Product 4",
    desc: "Best thing of all",
    price: "$14.11",
  },
  { name: "Shipping", desc: "", price: "Free" },
];

const addresses = ["1 MUI Drive", "Ethiopia", "AddisAbeba", "99999", "USA"];

const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr Fancy Saint" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-2023" },
  { name: "Expiry date", detail: "07/2027" },
];

export default function Review({ id, title, price, supPrice, productPhoto }) {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>

      <List disablePadding>
        {/* {cart?.map((cart) => (
          <ListItem key={cart.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={cart.title} secondary={cart.desc} />
            <Typography variant="body2">{cart.price}</Typography>
          </ListItem>
        ))} */}

        <div className="CheckOut__review">
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

        <CurrencyFormat
          renderText={(value) => (
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {value}
              </Typography>
            </ListItem>
          )}
          value={getCartTotal(cart)}
          thousandSeparator={true}
          displayType={"text"}
          decimalScale={2}
          prefix={"$"}
        />
      </List>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>

          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
