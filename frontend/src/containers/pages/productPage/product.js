import React, { Component } from "react";
import { connect } from "react-redux";

class Product extends Component {
  render() {
    return <div>{this.props.searchQuery}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    searchQuery: state.search.searchQuery,
  };
};

export default connect(mapStateToProps)(Product);
