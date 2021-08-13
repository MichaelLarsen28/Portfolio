import React from 'react';
import ReactDOM from 'react-dom';
//BrowserRouter for routing between pages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./Routes/Routes"
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
