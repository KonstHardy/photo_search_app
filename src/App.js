import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import routes from "./routes";
import AuthRoute from "./routes/authRoute";

import { Header } from "./components/Header";
import { NotFound } from "./pages/NotFound";

export default function App() {
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

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
