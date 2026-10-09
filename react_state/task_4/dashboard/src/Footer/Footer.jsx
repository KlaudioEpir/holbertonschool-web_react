import React from "react";
import { getCurrentYear, getFooterCopy } from "../utils/utils";
import newContext from "../Context/context";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="App-footer">
      <p>
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>

      <newContext.Consumer>
        {({ user }) =>
          user.isLoggedIn && (
            <p>
              <a href="#contact">Contact us</a>
            </p>
          )
        }
      </newContext.Consumer>
    </div>
  );
};

export default Footer;
