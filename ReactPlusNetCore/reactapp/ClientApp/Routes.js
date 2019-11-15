import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" render={() => <h1>Home pagez</h1>} />

              <Route
                exact
                path="/route1"
                render={() => <h1>This is route1x</h1>}
              />

              <Route
                exact
                path="/route2"
                render={() => <h1>This is route2x</h1>}
              />

              <Route render={() => <h1>Route not foundx</h1>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

Routes.defaultProps = {};

export default Routes;
