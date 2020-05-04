import React from "react";
import classes from "./menu.module.scss";
import { Link } from "react-router-dom";
export default function menu(props) {
  const items = {
    "Computers & Software": "/",
    "Mobile & Tablets": "/",
    Electronics: "/",
    "Home Goods": "/",
    Sports: "/",
    "Fashion & Beauty": "/",
    "Food & Bevarges": "/",
    Kids: "/",
    "Books & Entertainment": "/",
  };

  let menu_ = [];

  for (let [key, value] of Object.entries(items)) {
    menu_.push(
      <li key={key}>
        <Link to={value} />
        {key}
      </li>
    );
  }

  return (
    <div
      className={
        props.cordienate === "vertical"
          ? classes.menu_vertical
          : classes.menu_horizontal
      }
    >
      <ul>{menu_}</ul>
    </div>
  );
}
