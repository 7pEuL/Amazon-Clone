import React from "react";
import { Outlet, Link } from "react-router-dom";
import { auth } from "../../FirebaseCompat";
import { useStateValue } from "../../Provider/StateProvider";
import Nav from "../Nav/Nav";

import PlaceOutlined from "@mui/icons-material/PlaceOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, Button, Menu, MenuItem } from "@mui/material";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";

import "./Header.css";
import Images from "../../Data/Images";
import MenuPopupState from "./MenuPopUp";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";

const Header = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  // console.log(cart)

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "EMPTY_CART",
      });
    }
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="header__logo">
            <img src={Images.AmazonLogo} alt="" />
          </div>
        </Link>
        <Link className="header__locationLink viewL" to="/Location">
          <div className="header__location ENhide">
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="" {...bindTrigger(popupState)}>
                    <PlaceOutlined className="header__optionLocationColor" />
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>ETHIOPIA</MenuItem>
                    <MenuItem onClick={popupState.close}>CANADA</MenuItem>
                    <MenuItem onClick={popupState.close}>EUROPA</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </div>
          <div className="header__option header__optionHello ENhide">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">
              {/* < PlaceOutlined className="header__optionLocationColor" /> */}
              Select your address
            </span>
          </div>
        </Link>
        <div className="header__search viewL">
          <div className="header__searchAll">All</div>
          {/* <Button className="header__searchText" variant="outlined" color="secondary">All</Button> */}
          <input
            htmlFor="search"
            id="search"
            className="header__searchInput"
            type="outlined"
            color="secondary"
            placeholder="Search Amazon"
          />
          <SearchIcon id="search" className="header__searchIcon" />
        </div>

        <div className="ENhide">
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button variant="" {...bindTrigger(popupState)}>
                  <Link to="/Language">
                    <div className="header__optionEN ENhide">
                      <img src={Images.USAFlag} alt="" />
                      <span>EN</span>
                    </div>
                  </Link>
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>ET</MenuItem>
                  <MenuItem onClick={popupState.close}>ES</MenuItem>
                  <MenuItem onClick={popupState.close}>Amazon.com</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </div>

        <div className="header__nav viewL">
          {/* <Link to="/Language">
            <div className="header__optionEN ENhide">
              <img src={Images.USAFlag} alt="" />
              <span>EN</span>
            </div>
          </Link> */}

          <Link to={!user && "/SignIn"}>
            <div
              onClick={handleAuth}
              className="header__option header__optionSign"
            >
              <span className="header__optionLineOne">
                Hello, {user ? user.email : `Sign in`}
              </span>
              <span className="header__optionLineTwo">
                {!user ? `Account & List` : `Account & List / Sign out`}
              </span>
            </div>
          </Link>

          <Link to={`${user ? "/Orders" : "/SignIn"}`}>
            <div className="header__option header__optionReturns">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
        </div>

        {/* Phone Menu */}
        <Link className="viewP" to={!user && "/SignIn"}>
          <div onClick={handleAuth} className="header__option ">
            <small className="header__viewP">
              {user ? truncate(user.email, 8) : `Sign in`}{" "}
              <PersonOutlineOutlinedIcon />
            </small>
          </div>
          {/* <PersonOutlineOutlinedIcon /> */}
        </Link>
        <Link className="cartLink" to={`${user ? "/Cart" : "/SignIn"}`}>
          <div className="header__Cart">
            <Badge
              className="header__CartBadge"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              badgeContent={cart?.length}
              // color="success"
            >
              {/* <ShoppingCartOutlinedIcon /> */}
            </Badge>
            <img src={Images.AmazonCart} alt="" />
          </div>
          <span className="header__optionLineTwo secondSpan">Cart</span>
        </Link>
      </div>
      <Nav />
      <Outlet />
    </>
  );
};

export default Header;
