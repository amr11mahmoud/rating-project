import React from "react";
import classes from "./product.module.scss";
import RatingCircle from "./ratingCircle/ratingCircle";
import { Link } from "react-router-dom";
export default function product(props) {
  // product description
  let description = props.product.description.substring(0, 500) + " ..";
  // product rating
  let rating = props.product.rating.match(/\d/g).join(".").substring(0, 3);

  const ratingPercentage = (rating / 5) * 100;

  let product = (
    <div className="container-fluid">
      <div className={`row  ${classes.product}`}>
        <div className={`col-3 ${classes.productImage}`}>
          <img src={props.product.image_urls} alt="" />
        </div>
        <div className={`col-9 ${classes.productBody}`}>
          <div className="">
            <div className="col">
              <h6 className={classes.productTitle}>
                <Link to={`product/${props.product.title}`}>
                  {props.product.title}
                </Link>
              </h6>
              <p className={classes.productDescription}>
                {description
                  ? description
                  : "we can't find description for this product"}
              </p>
              <div className={classes.productRating}>
                <RatingCircle
                  radius={50}
                  stroke={10}
                  progress={ratingPercentage}
                  rating={rating}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return product;
}
