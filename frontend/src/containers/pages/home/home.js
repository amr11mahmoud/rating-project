import React, { Component } from "react";
import Navbar from "../../../components/Navbar/navbar";
import Logo from "../../../components/Logo/logo";
import SearchForm from "../../search/searchForm";
import Illustration from "../../../components/UI/homeillustration/homeillustration";
import Footer from "../../../components/Footer/footer";
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar Buttons="home" />
        <Logo place="home" />
        <div className="mb-5" />
        <div className="container">
          <SearchForm />
        </div>
        <Illustration />
        <Footer />
      </React.Fragment>
    );
  }
}
