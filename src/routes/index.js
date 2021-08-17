import React from "react";

import Home from "../pages/home";
import Login from "../pages/login";
import Gallery from "../pages/gallery";
import { Modal } from "../components/modal";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
    protected: null,
  },
  {
    path: "/login",
    exact: true,
    component: () => <Login />,
    protected: null,
  },
  {
    path: "/gallery",
    exact: true,
    component: () => <Gallery />,
    protected: "isAuth",
  },
  {
    path: "/gallery/:id",
    exact: true,
    component: () => <Modal />,
    protected: "isAuth",
  },
];

export default routes;
