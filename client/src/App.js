import React from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Landingpage from "./components/views/LandingPage/Landingpage";

import LoginPage from "./components/views/LoginPage/LoginPage";

import RegisterPage from "./components/views/RegisterPage/RegisterPage";

import Auth from "./hoc/auth";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(Landingpage, null)} />

          <Route path="/login" component={Auth(LoginPage, false)} />

          <Route path="/Register" component={Auth(RegisterPage, false)} />
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

export default App;
