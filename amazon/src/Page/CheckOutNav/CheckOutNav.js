import React from "react";
import { Link } from "react-router-dom";
import images from "../../Data/Images";
import LockIcon from "@mui/icons-material/Lock";

import "./CheckOutNav.css";

const CheckOutNav = () => {
  return (
    <>
      <div className="CheckOutNavWrap">
        <div className="CheckOutNav">
          <Link to="/">
            <div className="CheckOutNav__logo">
              <img src={images.AmazonLogo} alt="" />
            </div>
          </Link>
          
          <div className="CheckOutNav__lockIcon">
            <LockIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutNav;
