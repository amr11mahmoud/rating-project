import React from "react";
import classes from "./navbarNotHome.module.scss";
import Navbar from "../navbar";

import SearchForm from "../../../containers/search/searchForm";
export default function navbarNotHome() {
  return (
    <React.Fragment>
      <Navbar Buttons="searchResult">
        <div className={classes.SearchForm}>
          <SearchForm />
        </div>
      </Navbar>
    </React.Fragment>
  );
}
