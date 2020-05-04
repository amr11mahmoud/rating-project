import React from "react";
import classes from "./appsButtons.module.scss";
export default function appsButtons(props) {
  return (
    <ul
      className={`${
        props.place === "home"
          ? classes.appsButtons
          : classes.appsButtonsNotHome
      } row`}
    >
      <li className={classes.Button}>
        <a
          href="https://itunes.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-apple" style={{ paddingRight: "5px" }}></i>
          Apple Store
        </a>
      </li>

      <li className={classes.Button}>
        <a
          href="https://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-android" style={{ paddingRight: "5px" }}></i>
          Google Play
        </a>
      </li>
    </ul>
  );
}
