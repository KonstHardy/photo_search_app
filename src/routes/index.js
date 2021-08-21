import React from "react";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Gallery } from "../pages/Gallery";
import { PhotoModal } from "../components/PhotoModal";

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
    component: () => <PhotoModal />,
    protected: "isAuth",
  },
];

export default routes;
