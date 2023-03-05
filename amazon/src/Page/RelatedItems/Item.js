import React from "react";

import "./Item.css";

import StarSharpIcon from "@mui/icons-material/StarSharp";
import StarBorderPurple500SharpIcon from "@mui/icons-material/StarBorderPurple500Sharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, Fab } from "@mui/material";
import { useStateValue } from "../../Provider/StateProvider";
import Star from "../../Components/Product/Star/Star";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RelItem = ({
  id,
  title,
  price,
  supPrice,
  itemPhoto,
  star,
  NoStar,
  rate,
}) => {
  const [{ cart, user }, dispatch] = useStateValue();

  const addToCart = () => {
    // Add item to Cart
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        price: price,
        supPrice: supPrice,
        productPhoto: itemPhoto,
        star: star,
        NoStar: NoStar,
      },
    });

    toast.success(`Adding to ${user.email} Cart`);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      <div className="related__items">
        <div className="related__itemPhoto">
          <img src={itemPhoto} alt="" />
        </div>

        <div className="related__itemDescription">
          <p className="fs-14">{truncate(title, 35)}</p>
          <div className="product__rating">
            <Star />

            {/* {Array(star)
              .fill()
              .map((_, i) => (
                <StarSharpIcon key={i} />
              ))}
            {Array(NoStar)
              .fill()
              .map((_, i) => (
                <StarBorderPurple500SharpIcon key={i} />
              ))} */}
          </div>
          <p className="fs-12">{rate}</p>
          <p className="fs-13">${price}</p>

          <div className="related__itemsButton">
            <Box onClick={addToCart} sx={{ "& > :not(style)": { m: 1 } }}>
              <Fab
                variant="extended"
                size="small"
                color="success"
                aria-label="add"
              >
                Add To
                <ShoppingCartOutlinedIcon sx={{ ml: 0.7, pb: 0.5 }} />
              </Fab>
            </Box>
          </div>
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

export default RelItem;
