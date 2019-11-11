// React Home page content component
// M. Allen - 2019

import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <div className="text-center App-body">
        <div className="container App-content">
          <div className="row justify-content-center">
            <div className="col-xs-6">
              <h1 className="mvcap-green-text">
                <strong>MVCAP</strong>
              </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <h2 className="mvcap-green-text">
                Community Development - Charity Support - Small Project Grants
              </h2>
            </div>
          </div>
          <div className="row justify-content-center padding-top-5vh">
            <div className="col-xs-6">
              <img
                src="images/mvcap-logo.png"
                className="img-fluid w-50"
                alt="MVCAP Logo"
              />
            </div>
          </div>
          <div className="row justify-content-center padding-top-5vh">
            <div className="col-sm-10">
              <p>
                MVCAP is a Charitable Incorporated Organisation serving the Malmesbury Community Area. MVCAP is a charity registered with the Charity Commission - Registration Number: 1155592
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
