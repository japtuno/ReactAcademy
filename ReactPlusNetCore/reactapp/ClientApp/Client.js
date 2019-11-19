import React from "react";
import ReactDOM from "react-dom";
import { BrowserHistory } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import FullPage from "./Components/common/FullPage";

//ReactDOM.render( -> não precisamos porque o server.js já renderiza o page html
ReactDOM.hydrate(
  <Router history={BrowserHistory}>
    <FullPage />
  </Router>,
  document.getElementById("app")
);
