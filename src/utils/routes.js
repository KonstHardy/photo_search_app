import React from "react";

import Home from "../pages/home";
import Gallery from "../pages/gallery";
import Login from "../pages/login";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
    protected: null,
  },
  {
    path: "/gallery",
    exact: true,
    component: () => <Gallery />,
    protected: "isAuth",
  },
  {
    path: "/login",
    exact: true,
    component: () => <Login />,
    protected: null,
  },
];

export default routes;
