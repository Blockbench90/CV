import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Route, Router} from "react-router-dom";

import "./assets/css/header.css";
import "./assets/scss/material-kit-react.scss";
import Components from "./Components";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
      <Route path="/" component={Components} />
  </Router>,
  document.getElementById("root")
);
