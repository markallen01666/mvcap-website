// Mark Allen - web developer - Home page
// M. Allen - 2019

import React, { Component } from "react";
import "./App.css";
import CookieConsent from "react-cookie-consent";

// Components
import NavBar from "./NavBar";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Footer />
        <CookieConsent>
          This website only uses cookies to enhance the user's experience.
        </CookieConsent>
      </div>
    );
  }
}

export default App;
