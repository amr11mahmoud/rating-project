import React, { Component } from "react";
import "./styles/App.scss";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./containers/pages/home/home";
import SearchResult from "./containers/pages/searchResult/searchResult";
import Product from "./containers/pages/productPage/product";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/search" component={SearchResult} />
            <Route path="/product" component={Product} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
