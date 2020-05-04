import React, { Component } from "react";
import classes from "./searchForm.module.scss";
import { connect } from "react-redux";
import * as SearchActions from "../../store/index";
import { Link, Redirect, withRouter } from "react-router-dom";
import SearchButton from "../search/searchButton/searchButton";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonDisabled: true,
    };
    this.onsearchHandler = this.onsearchHandler.bind(this);
  }

  // ***** commented because i already fetch data when search result page mount *****
  fetchProductsHandler = (searchQuery) => {
    fetch(`http://localhost:8000/api/search/${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        this.props.onSearchSubmit(data);
      });
  };

  onClickHandler = (searchQuery, clickable) => {
    this.props.onResetSearchSuggetion();
    if (clickable) {
      this.fetchProductsHandler(searchQuery);
    }
  };

  // handle autocomplete
  onsearchHandler = (e) => {
    const value = e.target.value;

    if (value.length === 0) {
      this.props.onSaveSearchSuggestions([], value);
      this.setState({
        ...this.state,
        buttonDisabled: true,
      });
    } else {
      this.setState({
        ...this.state,
        buttonDisabled: false,
      });

      fetch("http://localhost:8000/api/autocomplete/" + value + "/")
        .then((res) => res.json())
        .then((data) => this.props.onSaveSearchSuggestions(data, value))
        .catch((e) => {
          console.log(e);
        });
    }
  };

  onSubmitHandler(e) {
    e.preventDefault();
    this.onClickHandler(this.props.searchQuery, false);
    this.props.history.push(`search?q=${this.props.searchQuery}`);
  }

  render() {
    let autoComplete = null;

    if (this.props.searchSuggestions !== []) {
      let updatedArray = [];
      if (this.props.searchSuggestions.length < 5) {
        updatedArray = this.props.searchSuggestions;
      } else {
        updatedArray = this.props.searchSuggestions.splice(0, 5);
      }

      autoComplete = updatedArray.map((suggest, index) => {
        const searchTitle = suggest.title.substring(0, 18);
        return (
          <li
            key={index}
            onClick={() => this.onClickHandler(searchTitle, true)}
          >
            <Link to={`search?q=${searchTitle}`}>{searchTitle}</Link>
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
                this.onsearchHandler(e);
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
              click={this.props.onResetSearchSuggetion}
              disabled={this.state.buttonDisabled}
            />
          </div>
        </form>
        {this.redirect ? (
          <Redirect to={`search?q=${this.props.searchQuery}`} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchSuggestions: state.search.searchSuggestions,
    searchQuery: state.search.searchQuery,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveSearchSuggestions: (data, value) =>
      dispatch(SearchActions.saveSearchSuggestions(data, value)),
    onResetSearchSuggetion: () =>
      dispatch(SearchActions.resetSearchSuggetion()),
    onSearchSubmit: (data) => dispatch(SearchActions.setSearchResualt(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchForm));
