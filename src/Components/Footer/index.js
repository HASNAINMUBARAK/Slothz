import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./style.css";
const Footer = () => {
  return (
    <>
      <div className="z">
        <div className="a">
          <h5>© 2021 SLOTHz</h5>
          <h4>Made with love by the SLOTHz team!</h4>
        </div>
        <div className="b">
          {/* <TwitterIcon/> */}
          <i
            class="fab fa-twitter-square"
            style={{ color: "pink" }}
          ></i>
          <i class="fab fa-discord" style={{ color: "pink" }}></i>
        </div>
      </div>
    </>
  );
};

export default Footer;
