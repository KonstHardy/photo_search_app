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

// import Loader from "../components/loader";
// import Search from "../components/search";
// import PhotoList from "../components/photoList";

// import { loginAction } from "../store/actions/auth";

import routes from "../utils/routes";

function App() {
  const isAuth = useSelector((state) => state.auth.authentication);
  const dispatch = useDispatch();

  console.log("isAuth", isAuth);

  // useEffect(() => {
  //   dispatch(loginAction());
  // }, []);

  // if (!isAuth) {
  //   return <Loader />;
  // }

  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
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
