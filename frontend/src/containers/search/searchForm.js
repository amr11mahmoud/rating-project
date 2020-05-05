import React, { Component } from "react";
import classes from "./searchForm.module.scss";
import { connect } from "react-redux";
import * as SearchActions from "../../store/index";
import { Link, withRouter } from "react-router-dom";
import SearchButton from "../search/searchButton/searchButton";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonDisabled: true,
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onClickHandler = (searchQuery) => {
    this.props.onSearchResultHandler(searchQuery);
    this.props.onResetSearchSuggetion();
  };

  // handle autocomplete
  onSearchHandler = (e) => {
    const value = e.target.value;
    if (value.length === 0) {
      this.props.onResetSearchSuggetion();
      this.setState({
        ...this.state,
        buttonDisabled: true,
      });
    } else {
      this.setState({
        ...this.state,
        buttonDisabled: false,
      });
      this.props.onAutoCompleteHandler(value);
    }
  };

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.history.push(`/search?q=${this.props.searchQuery}`);
  }

  render() {
    let autoComplete = null;

    if (this.props.searchSuggestions !== []) {
      let updatedArray = [];
      updatedArray = this.props.searchSuggestions;

      if (this.props.searchSuggestions.length > 5) {
        updatedArray = this.props.searchSuggestions.splice(0, 5);
      }
      autoComplete = updatedArray.map((suggest, index) => {
        const searchTitle = suggest.title.substring(0, 18);
        return (
          <li key={index} onClick={() => this.onClickHandler(searchTitle)}>
            <Link to={`/search?q=${searchTitle}`}>{searchTitle}</Link>
          </li>
        );
      });
    }

    return (
      <div>
        <form
          className={classes.SearchForm}
          autoComplete="off"
          onSubmit={(e) => this.onSubmitHandler(e)}
        >
          <div className={classes.autocomplete}>
            <input
              onChange={(e) => {
                this.onSearchHandler(e);
              }}
              type="text"
              placeholder="What are you looking for ?"
              className={classes.Input}
            />
            {this.props.searchSuggestions.length !== 0 ? (
              <div className={classes.searchSuggestions}>
                <ul>{autoComplete}</ul>
              </div>
            ) : null}
            <SearchButton
              click={() => this.onClickHandler(this.props.searchQuery)}
              disabled={this.state.buttonDisabled}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchQuery: state.search.searchQuery,
    searchSuggestions: state.search.searchSuggestions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAutoCompleteHandler: (searchQuery) =>
      dispatch(SearchActions.autoComplete(searchQuery)),
    onSearchResultHandler: (searchQuery) =>
      dispatch(SearchActions.searchResult(searchQuery)),
    onResetSearchSuggetion: () =>
      dispatch(SearchActions.resetSearchSuggetion()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchForm));
