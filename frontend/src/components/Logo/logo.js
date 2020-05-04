import React from "react";
import Logo from "../../assets/images/logo.png";
import classes from "./logo.module.scss";
import { Link } from "react-router-dom";
export default function logo(props) {
  return (
    <Link to="/">
      <img
        src={Logo}
        alt=""
        className={
          props.place === "home" ? classes.HomeLogo : classes.SearchPageLogo
        }
      />
    </Link>
  );
}
