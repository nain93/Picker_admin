import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Fun from "./Fun";
import GlobalStyles from "./GolbalStyles";
import Landing from "./Landing";
import Pick from "./Pick";
import PickDetail from "./Pick/PickDetail";
import Token from "./Token";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" component={Dashboard} />
          <Route path="/pick" exact component={Pick} />
          <Route path="/pick/:id" component={PickDetail} />
          <Route path="/fun" component={Fun} />
          <Route path="/token" component={Token} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
