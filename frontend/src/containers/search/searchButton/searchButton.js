import React, { Component } from "react";
import classes from "./searchButton.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as ProductsActions from "../../../store/index";
class searchButton extends Component {
  fetchProductsHandler = (searchQuery) => {
    fetch(`http://localhost:8000/api/search/${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        this.props.onSearchSubmit(data);
      });
  };

  onClickHandler = (searchQuery) => {
    this.props.click();
    this.fetchProductsHandler(searchQuery);
  };

  render() {
    let searchQuery = this.props.searchQuery;

    return (
      <button
        disabled={this.props.disabled}
        className={classes.searchButton}
        onClick={() => this.onClickHandler(searchQuery)}
      >
        {/* if inputbox is empty show the key but disable it */}
        {!this.props.disabled ? (
          <Link to={`/search?q=${searchQuery}`}>Search</Link>
        ) : (
          "Search"
        )}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchQuery: state.search.searchQuery,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchSubmit: (data) => dispatch(ProductsActions.setSearchResualt(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(searchButton);
