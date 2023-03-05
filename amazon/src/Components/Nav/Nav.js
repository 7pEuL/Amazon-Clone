import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import "./Nav.css";
import List from "../Drawer/Drawer";
import { TextField } from "@mui/material";
import MenuPopupState from "../Header/MenuPopUp";

const Nav = () => {
  return (
    <>
      <div className="hideNav">{/* <List /> */}</div>

      <div className="nav2">
        <ul>
          <li className="">
            <div className="phoneMenuHide">
              <MenuPopupState />
              <b>ALL</b>
            </div>
          </li>

          <li className="nav2__menu nav2__menuSearch">
            {/* <MenuIcon /> */}
            <div className="LastToday">
              {/* <TextField label="Search Amazon" /> */}
              <div className="header__search">
                <input
                  id="search"
                  className="header__searchInput"
                  type="outlined"
                  color="secondary"
                  placeholder="Search Amazon"
                />
                <SearchIcon id="search" className="header__searchIcon" />
              </div>
            </div>
          </li>

          <li className="showM">Clinic</li>
          <li className="showM">Customer Service</li>
          <li className="showM">Best Sellers</li>
          <li className="showM">Amazon Basics</li>
          <li className="showM">Today's Deals</li>
          <li className="showM">Prime</li>
          <li className="hideT">New Releases</li>
          <li className="hideT">Music</li>
          <li className="hideT">Books</li>
          <li className="hideT">Registry</li>
          <li className="hideT">Fashion</li>
          <li className="hideT">Gift Cards</li>
          <li className="hide">Amazon Home</li>
          <li className="hide">Pharmacy</li>
          <li className="hide">Sell</li>
          <li className="hide">Coupons</li>
          <li className="hide">Computer</li>
          <li className="hide">Automotive</li>
          <li className="hide">Videos Games</li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
