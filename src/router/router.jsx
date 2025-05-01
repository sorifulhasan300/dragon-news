import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../page/Home";
import CategoryNews from "../page/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/home",
    element: <div>this is home</div>,
  },
  {
    path: "*",
    element: <h1>404 Error</h1>,
  },
]);

export default router;
