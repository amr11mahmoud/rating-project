import React, {Component} from "react";
import classes from "./cardBody.module.scss";
import RatingCircle from '../../../searchResultPageComps/productsList/product/ratingCircle/ratingCircle'

class cardBody extends Component {
 

  render(props){
    let rating = null
    let ratingPercentage = null
    if (this.props.product.rating) {
       rating = this.props.product.rating.match(/\d/g).join(".").substring(0,3)
         ratingPercentage = (rating / 5) * 100;
    }
    
    return (
      <React.Fragment>
        <div className={classes.cardBody}>
          <div className="row">
            <div className="col-lg-8">
              <h6><b>{this.props.product.title}</b></h6>
              <p>{this.props.product.description}</p>
              <div className='row'>
                <div className={`col-lg-4 ${classes.buyItFromSouq}`}>
                  <p> Buy it from <b>SOUQ</b></p>
                  {/* <p> souq star</p> */}
                </div>
                <div className={`col-lg-4 ${classes.buyItFromJumia}`}>
                  <p> Buy it from <b>JUMIA</b></p>
                  {/* <p> jumia star</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={`col ${classes.productRating}`}>
                <RatingCircle
                  radius={70}
                  stroke={8}
                  progress={ratingPercentage}
                  rating={rating}
                />
              </div>
              <div className={`col ${classes.noOfReviews}`}>
                <p> <b style={{fontSize:'25px'}}>{this.props.product.no_of_reviews}</b> reviewer</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );

  }
  
}

export default cardBody