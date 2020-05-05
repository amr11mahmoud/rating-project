import React, {Component} from "react";
import ImageSlider from "./imageSlider/imageSlider";
import CardBody from "./cardBody/cardBody";
import classes from "./productCard.module.scss";
import * as productActions from '../../../store/index'
import {connect} from 'react-redux'
class ProductCard extends Component {
  
  render(props){
    return (
      <React.Fragment>
        <div className={`container ${classes.productCard}`}>
          <div className="row">
            <div className="col-lg-3" >
              <ImageSlider images={this.props.product.image_urls} />
            </div>
            <div className="col-lg-9">
              <CardBody product={this.props.product} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchingProduct: (searchQuery) =>
      dispatch(productActions.fetshProduct(searchQuery)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)