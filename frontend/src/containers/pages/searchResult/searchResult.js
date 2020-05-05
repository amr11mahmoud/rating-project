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
    const searchQuery = window.location.href
      .substring(index + 2, window.location.href.length)
      .replace(/%20/g, " ");
    if (this.props.searchResult.length === 0) {
      this.props.onSearchResultHandler(searchQuery);
    }
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

        <SearchResultWrapper products={this.props.searchResult} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchQuery: state.search.searchQuery,
    searchResult: state.search.searchResult,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchResultHandler: (searchQuery) =>
      dispatch(SearchActions.searchResult(searchQuery)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(searchResult);
