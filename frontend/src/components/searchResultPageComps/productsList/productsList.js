import React from "react";
import Product from "./product/product";
export default function productsList(props) {
  let items = props.products.map((product, index) => {
    return <Product product={product} key={index} />;
  });

  return items;
}
