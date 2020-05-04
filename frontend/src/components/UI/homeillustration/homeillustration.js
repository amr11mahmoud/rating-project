import React from "react";
import illustration from "../../../assets/images/home-image.png";
import classes from "./homeillustration.module.scss";
export default function homeillustration() {
  return <img src={illustration} alt="" className={classes.illustration} />;
}
