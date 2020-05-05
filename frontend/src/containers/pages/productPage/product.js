import React, { Component } from "react";
import { connect } from "react-redux";

class Product extends Component {
  UNSAFE_componentWillMount() {
    const index = window.location.href.search("product");

    const searchQuery = window.location.href.substring(
      index + 8,
      window.location.href.length
    );

    fetch(`http://localhost:8000/api/product/${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        // this.props.onFetchingData(data);
        console.log(data);
      });
  }
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
