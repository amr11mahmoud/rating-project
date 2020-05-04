import React from "react";
import ProductsList from "../productsList/productsList";
import classes from "./searchResultWrapper.module.scss";
export default function searchResultWrapper(props) {
  return (
    <div className="container-fluid">
      <div className={`row ${classes.searchResultWrapper}`}>
        {/* <div className={`col-2 ${classes.Filter}`}>filter</div> */}
        <div className={`col ${classes.ProductsList}`}>
          <ProductsList products={props.products} />
        </div>
      </div>
    </div>
  );
}
