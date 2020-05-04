import React from "react";
import classes from "./footer.module.scss";
import FooterElement from "./footerElement";

const links = {
  About: "about/",
  Terms: "terms/",
  Privacy: "privacy/",
  Categories: "categories",
  Brands: "brands",
  Stores: "stores",
};

let footerLinks = [];
for (let [key, value] of Object.entries(links)) {
  footerLinks.push(<FooterElement title={key} goTo={value} key={key} />);
}

export default function footer() {
  return (
    <div className={classes.footer}>
      <ul>{footerLinks}</ul>
      <p>2020 | All copyright are reserved for RATING company</p>
    </div>
  );
}
