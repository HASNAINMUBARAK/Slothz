import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import logo from "../../Assets/Images/logo.png"
import "./index.css";
const Navbar = () => {
  const [showIcons, setShowIcons] = useState(false);
  return (
    <>
      <Grid container className="nav" display="flex" justifyContent="space-evenly">
        <div>
          {" "}
          <Grid item md={5} sm={6} xs={8} className="logo">
            <img
              src={logo}
              alt=" "
              className="datusing"
            />
            <Link to="/">
              <h1>SLOTHZ</h1>
              <p className="aka">aka Datusing</p>
            </Link>
          </Grid>
        </div>
        <Grid item md={3} sm={2} xs={6} className="search">
          <input placeholder="Search" className="search1"></input>
        </Grid>
        <Grid item md={4} sm={4} xs={6} className="anchor">
          <div className={showIcons ? "mobile-link-menu" : "link-menu"}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="hamburger-menu">
            <a href="# " onClick={() => setShowIcons(!showIcons)}>
              <MenuRoundedIcon />
            </a>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
