import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import Header from "../components/header";
import routes from "../utils/routes";

// import Loader from "../components/loader";
// import { loginAction } from "../store/actions/auth";

function App() {
  const isAuth = useSelector((state) => state.auth.authentication);
  // const dispatch = useDispatch();

  console.log("isAuth", isAuth);

  // useEffect(() => {
  //   dispatch(loginAction());
  // }, []);

  // if (!isAuth) {
  //   return <Loader />;
  // }

  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
