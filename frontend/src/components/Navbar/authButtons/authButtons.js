import React from "react";
import classes from "./authButtons.module.scss";
export default function authButtons(props) {
  return (
    <ul
      className={
        props.place === "home"
          ? classes.authButtons
          : classes.authButtonsNotHome
      }
    >
      <li className={classes.login}>
        <a href="/">LOGIN</a>
      </li>
      <li className={classes.signup}>
        <a href="/">SIGNUP</a>
      </li>
      <li className={classes.language}>
        <a href="/">عربي</a>
      </li>
    </ul>
  );
}
