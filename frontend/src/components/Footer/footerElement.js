import React from "react";
import { Link } from "react-router-dom";
export default function footerElement(props) {
  return (
    <li>
      <Link to={props.goTo}>{props.title}</Link>
    </li>
  );
}
