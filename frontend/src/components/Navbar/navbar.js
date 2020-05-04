import React from "react";
import AppsButtons from "./appsButtons/appsButtons";
import AuthButtons from "./authButtons/authButtons";
import classes from "./navbar.module.scss";
export default function navbar(props) {
  return (
    <div className={"navbar " + classes.navbar}>
      <AppsButtons place={props.Buttons} />
      <div className="flex">{props.children}</div>
      <AuthButtons place={props.Buttons} />
    </div>
  );
}
