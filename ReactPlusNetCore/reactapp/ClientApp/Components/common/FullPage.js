import React, { Component } from "react";

import Routes from "../../Routes";

class FullPage extends Component {
  render() {
    return (
      <div>
        <h2>Page top</h2>
        <Routes />
      </div>
    );
  }
}

FullPage.defaultProps = {};

export default FullPage;
