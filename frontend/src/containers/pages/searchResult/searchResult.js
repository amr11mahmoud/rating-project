import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../../../components/Navbar/navbar";
import SearchForm from "../../search/searchForm";
import classes from "./searchResult.module.scss";
import Logo from "../../../components/Logo/logo";
import Menu from "../../../components/menu/menu";
import SearchResultWrapper from "../../../components/searchResultPageComps/searchResultWrapper/searchResultWrapper";
import SortByAndShowing from "../../../components/searchResultPageComps/sortByAndShowing/sortByAndShowing";
import * as SearchActions from "../../../store/index";
class searchResult extends Component {
  UNSAFE_componentWillMount() {
    const index = window.location.href.search("q=");
    const searchQuery = window.location.href.substring(
      index + 2,
      window.location.href.length
    );

    fetch(`http://localhost:8000/api/search/${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        this.props.onFetchingData(data);
        console.log("component will mount searchResult");
      });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar Buttons="searchResult">
          <div className={classes.SearchForm}>
            <SearchForm />
          </div>
        </Navbar>
        <div className={`container-fluid ${classes.CenterLogo}`}>
          <Logo />
        </div>
        <Menu cordienate="horizontal" />
        <SortByAndShowing searchQuery={this.props.searchQuery} />

        <SearchResultWrapper products={this.props.products} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.productsArray,
    searchQuery: state.search.searchQuery,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchingData: (data) => dispatch(SearchActions.setSearchResualt(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(searchResult);
