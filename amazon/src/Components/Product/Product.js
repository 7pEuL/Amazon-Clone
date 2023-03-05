import React from "react";
import "./Product.css";

import Star from "./Star/Star";
import { Box, Fab } from "@mui/material";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import StarBorderPurple500SharpIcon from "@mui/icons-material/StarBorderPurple500Sharp";
// import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useStateValue } from "../../Provider/StateProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({
  id,
  title,
  price,
  priceDisplay,
  supPrice,
  productPhoto,
  star,
  NoStar,
}) => {
  const [{ cart, user }, dispatch] = useStateValue();

  const addToCart = () => {
    //   Add item to Cart
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        price: price,
        priceDisplay: priceDisplay,
        supPrice: supPrice,
        productPhoto: productPhoto,
        star: star,
        NoStar: NoStar,
      },
    });

    user.email && toast.success(`Adding to ${user.email} Cart`);

    !user.email && toast.warn(`Adding to Guest Cart`);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      <div className="product">
        <div className="product__info">
          <p className="product__title">
            {/* {title} */}
            {truncate(title, 100)}
          </p>
          <p className="product__price">
            <b>$</b>
            <strong>{priceDisplay}</strong>
            <sup>{supPrice}</sup>
          </p>

          <div className="product__rating">
            {/* <Star /> */}
            {Array(star)
              .fill()
              .map((_, i) => (
                <StarSharpIcon key={i} />
              ))}
            {Array(NoStar)
              .fill()
              .map((_, i) => (
                <StarBorderPurple500SharpIcon key={i} />
              ))}
          </div>
        </div>

        <div className="product__img">
          <img src={productPhoto} alt="" />
        </div>

        <div className="product__button">
          <Box onClick={addToCart} sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab
              variant="extended"
              size="small"
              color="warning"
              aria-label="add"
            >
              Add To
              <ShoppingCartOutlinedIcon sx={{ ml: 0.7, pb: 0.5 }} />
            </Fab>
          </Box>
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

export default Product;
