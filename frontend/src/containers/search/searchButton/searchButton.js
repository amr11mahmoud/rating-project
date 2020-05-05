import React, { Component } from "react";
import classes from "./searchButton.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class searchButton extends Component {
  render() {
    let searchQuery = this.props.searchQuery;

    return (
      <button
        disabled={this.props.disabled}
        className={classes.searchButton}
        onClick={() => this.props.click()}
      >
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

export default connect(mapStateToProps)(searchButton);
