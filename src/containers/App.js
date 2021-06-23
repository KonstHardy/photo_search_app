import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";

import Header from "../components/header";
import routes from "../routes";
import AuthRoute from "../routes/authRoute";

function App() {
  const isAuth = useSelector((state) => state.auth.authentication);
  console.log("isAuth", isAuth);

  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, index) => {
          if (route.protected === "isAuth") {
            return (
              <AuthRoute
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          }

          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
