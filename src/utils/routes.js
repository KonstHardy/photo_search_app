import React from "react";

import Home from "../pages/home";
import Gallery from "../pages/gallery";
import Login from "../pages/login";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
  },
  {
    path: "/gallery",
    exact: true,
    component: () => <Gallery />,
  },
  {
    path: "/login",
    exact: true,
    component: () => <Login />,
  },
];
