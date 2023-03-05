import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import "./MenuPopupState.css";
import { useStateValue } from "../../Provider/StateProvider";
import { auth } from "../../Firebase";

const MenuPopupState = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      dispatch({
        type: "EMPTY_CART",
      });
      auth.signOut();
    }
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div className="hoverMenu">
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button variant="" {...bindTrigger(popupState)}>
              <MenuIcon />
            </Button>

            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close} onClick={handleAuth}>
                <Link to="/SignIn">
                  Hello,
                  {user ? truncate(user.email, 20) : `Sign in`} <br />
                  {user ? "Sign Out" : ``}
                </Link>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Link to={`${user ? "/Orders" : "/SignIn"}`}>Orders</Link>
              </MenuItem>

              <div className="showMenuPop">
                <MenuItem onClick={popupState.close}>
                  <Link to="/">Clinic</Link>
                </MenuItem>
              </div>

              <MenuItem onClick={popupState.close}>
                <Link to="/">Customer Service</Link>
              </MenuItem>

              <MenuItem onClick={popupState.close}>
                <Link to="/">Best Sellers</Link>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Link to="/">Amazon Basics</Link>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Link to="/">Today's Deals</Link>
              </MenuItem>

              <MenuItem onClick={popupState.close}>
                <Link to="/">Prime</Link>
              </MenuItem>

              <div className="showMenuPop">
                <MenuItem onClick={popupState.close}>
                  <Link to="/">New Releases</Link>
                </MenuItem>
              </div>

              <div className="showMenuPop">
                <MenuItem onClick={popupState.close}>
                  <Link to="/">Music</Link>
                </MenuItem>
              </div>

              <div className="showMenuPop">
                <MenuItem onClick={popupState.close}>
                  <Link to="/">Registry</Link>
                </MenuItem>
              </div>

              <MenuItem onClick={popupState.close}>
                <Link to="/">Fashion</Link>
              </MenuItem>

              <div className="showMenuPop">
                <MenuItem onClick={popupState.close}>
                  <Link to="/">Gift Cards</Link>
                </MenuItem>
              </div>

              <div className="showMenuPop">
                <MenuItem onClick={popupState.close}>
                  <Link to="/">Amazon Home</Link>
                </MenuItem>
              </div>

              <MenuItem onClick={popupState.close}>
                <Link to="/">Fashion</Link>
              </MenuItem>

              <div className="showMenuPop">
                <MenuItem onClick={popupState.close}>
                  <Link to="/">Clinic Pharmacy</Link>
                </MenuItem>
              </div>

              <div className="showMenuPop">
                <MenuItem onClick={popupState.close}>
                  <Link to="/">Sell</Link>
                </MenuItem>
              </div>

              <div className="showMenuPop">
                <MenuItem onClick={popupState.close}>
                  <Link to="/">Coupons</Link>
                </MenuItem>
              </div>

              <MenuItem onClick={popupState.close}>
                <Link to="/">Computer</Link>
              </MenuItem>

              <div className="showMenuPop">
                <MenuItem onClick={popupState.close}>
                  <Link to="/">Automotive</Link>
                </MenuItem>
              </div>

              <MenuItem onClick={popupState.close}>
                <Link to="/">Videos Games</Link>
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </div>
  );
};

export default MenuPopupState;
