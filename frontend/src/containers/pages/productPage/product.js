import React, { Component } from "react";
import { connect } from "react-redux";
import NavBarNotHome from "../../../components/Navbar/NavbarNotHome/navbarNotHome";
import Logo from "../../../components/Logo/logo";
import Menu from "../../../components/menu/menu";
import ProductCard from "../../../components/productPageComps/productCard/productCard";
import classes from "./product.module.scss";
import CommentsWrapper from '../../../components/productPageComps/commentsWrapper/commentsWrapper';

import * as productActions from "../../../store/index";
class Product extends Component {
  UNSAFE_componentWillMount() {
    const index = window.location.href.search("product");
    const searchQuery = window.location.href
      .substring(index + 8, window.location.href.length)
      .replace(/%20/g, " ");
    this.props.onFetchingProduct(searchQuery);
    this.props.onFetchingComments(searchQuery);
  }
  render() {
    return (
      <React.Fragment>
        <NavBarNotHome />
        <div className={`container-fluid ${classes.CenterLogo}`}>
          <Logo />
        </div>
        <Menu cordienate="horizontal" />
        <ProductCard product={this.props.product} />
        <CommentsWrapper comments={this.props.comments} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
    comments: state.product.product_comments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchingProduct: (searchQuery) =>
      dispatch(productActions.fetchProduct(searchQuery)),
    onFetchingComments: (searchQuery) =>
      dispatch(productActions.fetchComments(searchQuery)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
