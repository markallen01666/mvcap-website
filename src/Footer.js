// React Footer component
// M. Allen - 2019

import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="App-footer">
        <div className="container">
          <div className="row padding-top-5vh">
            <div className="col-sm text-sm-left">
              <p>
                &copy; MVCAP - 2019
              </p>
            </div>
            <div className="col-sm text-sm-right">
            <p>
                Website by Mark Allen:
              </p>
              <p>
              <a
                  href="https://markallenwebdeveloper.co.uk"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fas fa-link"></i> markallenwebdeveloper.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
