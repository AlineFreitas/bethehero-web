import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from './pages/SignIn';

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
        </Switch>
    </BrowserRouter>
  );
}