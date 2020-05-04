import React from "react";
import classes from "./sortByAndShowing.module.scss";
export default function sortByAndShowing(props) {
  return (
    <div className="container">
      <div className={`row ${classes.sortByAndShowing}`}>
        <div className="col">
          <span>
            Showing Rating for <b>{props.searchQuery.toUpperCase()}</b>
          </span>
        </div>
        <div className={`col ${classes.sortBy}`}>
          <div className="row">
            <span>
              <b>Sort By :</b>
            </span>
            <select name="sorting" id="">
              <option value="RELEVANCE">Relevance</option>
              <option value="LTH">Low To High</option>
              <option value="HTL">High To Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
