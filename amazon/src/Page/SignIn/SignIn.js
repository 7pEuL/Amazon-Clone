import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import AmazonLogoBlack from "../../Data/Images/AmazonLogo.png";

import "./SignIn.css";
import { auth } from "../../FirebaseCompat";
import { useStateValue } from "../../Provider/StateProvider";
// import { auth } from "../../Firebase";

const SignIn = ({ id }) => {
  const navigate = useNavigate();

  const [{ cart, user }, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        if (useCredential) {
          dispatch({
            type: "EMPTY_CART",
          });
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        if (useCredential) {
          dispatch({
            type: "EMPTY_CART",
          });
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const handleHelp = () => {
    document.querySelector(".signIn__needDropSide").toggle();
  };

  return (
    <>
      <div className="signIn">
        <Link to="/">
          <img className="signIn__logo" src={AmazonLogoBlack} alt="" />
        </Link>

        <div className="signIn__container">
          <h1>Sign in</h1>
          <form id="signIn__form">
            <label>Email or mobile phone number</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              onClick={signIn}
              className="signIn__signInButton"
            >
              Continue
            </button>
          </form>

          <p className="signIn__agree">
            {/* Fake Clone */}
            By continuing, you agree to Amazon's
            <b> Conditions of Use</b> and <b>Privacy Notice</b>.
          </p>

          <div className="signIn__needHelp signIn__needDrop">
            <ArrowDropDownIcon onClick={handleHelp} />
            <b>Need help?</b>
          </div>

          <div className="signIn__needDrop signIn__needDropSide">
            <b>Forgot your password?</b>
            <br />
            <b>Other issues with Sign-In</b>
          </div>
        </div>

        <div className="signIn__newToAmazon">
          <b>
            <hr />
          </b>
          <p>New to Amazon?</p>
          <b>
            <hr />
          </b>
        </div>

        <button onClick={register} className="signIn__registerButton">
          Create your Amazon account
        </button>

        <div className="signIn__footer">
          <div className="signIn__footerList signIn__needDrop">
            <b>Conditions of Use</b>
            <b>Privacy Notice</b>
            <b>Help</b>
          </div>
          <small>© 2019-2023, Amazon.com, Inc. or its affiliates</small>
        </div>
      </div>
    </>
  );
};

export default SignIn;
