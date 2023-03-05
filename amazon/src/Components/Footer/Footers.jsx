import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

import "./Footers.css";

const Footers = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__Laptop">
          <div className="footer__SignIn">
            <p>See personalized recommendations</p>
            <Link to="/SignIn">
              <Button>Sign in</Button>
            </Link>
            <small>
              New customer? <Link to="/SignIn">Start here.</Link>
            </small>
          </div>
          {/* <hr /> */}
          <div className="footer__backToTop">
            <a href="#top">Back To Top</a>
          </div>
          <div className="footer__Top">
            <div className="footer__TopGet">
              <div className="footer__TopWrap">
                <h3>Get to Know Us</h3>
                <AddIcon />
              </div>
              <ul>
                <Link>Careers</Link>
                <Link>
                  Amazon
                  <br />
                  Newsletter
                </Link>
                <Link>About Amazon</Link>
                <Link>Accessibility</Link>
                <Link>Sustainability</Link>
                <Link>Press Center</Link>
                <Link>Investor Relations</Link>
                <Link>Amazon Devices</Link>
                <Link>Amazon Science</Link>
              </ul>
            </div>

            <div className="footer__TopMake">
              <div className="footer__TopWrap">
                <h3>Make Money with Us</h3>
                <AddIcon />
              </div>
              <ul>
                <Link>Sell products on Amazon</Link>
                <Link>Sell apps on Amazon</Link>
                <Link>Supply to Amazon</Link>
                <Link>Protect & Build Your Brand</Link>
                <Link>Become an Affiliate</Link>
                <Link>Become a Delivery Driver</Link>
                <Link>Start a package delivery business</Link>
                <Link>Advertise Your Products</Link>
                <Link>Self-Publish with Us</Link>
                <Link>Host an Amazon Hub</Link>
                <Link>›See More Ways to Make Money</Link>
              </ul>
            </div>

            <div className="footer__TopAmazon">
              <div className="footer__TopWrap">
                <h3>Amazon Payment Products</h3>
                <AddIcon />
              </div>
              <ul>
                <Link>
                  Amazon Rewards Visa Signature <br /> Cards
                </Link>
                <Link>Amazon Store Card</Link>
                <Link>Amazon Secured Card</Link>
                <Link>Amazon Business Card</Link>
                <Link>Shop with Points</Link>
                <Link>Credit Card Marketplace</Link>
                <Link>Reload Your Balance</Link>
                <Link>Amazon Currency Converter</Link>
              </ul>
            </div>

            <div className="footer__TopLet">
              <div className="footer__TopWrap">
                <h3>Let Us Help You</h3>
                <AddIcon />
              </div>
              <ul>
                <Link>Amazon and COVID-19</Link>
                <Link>Your Account</Link>
                <Link>Your Orders</Link>
                <Link>Shipping Rates & Policies</Link>
                <Link>Amazon Prime</Link>
                <Link>Returns & Replacements</Link>
                <Link>Manage Your Content and Devices</Link>
                <Link>Your Recalls and Product Safety Alerts</Link>
                <Link>Amazon Assistant</Link>
                <Link>Help</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footers;
