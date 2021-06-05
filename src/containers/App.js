import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  // Switch,
  // Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import Loader from "../components/loader";
import Search from "../components/search";
import PhotoList from "../components/photoList";

import { loginAction } from "../store/actions/auth";

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
      <Route path="/">
        HOME PAGE
        {/* <Home /> */}
      </Route>
      <Route path="/gallery">
        <Search />
        <PhotoList />
        {/* <Gallery /> */}
      </Route>
      <Route path="/login">
        Login PAGE
        {/* <About /> */}
      </Route>
    </Router>
    // <>
    //   <Search />
    //   <PhotoList />
    // </>
  );
}

export default App;
