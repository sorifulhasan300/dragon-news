import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../page/Home";
import CategoryNews from "../page/CategoryNews";
import Authentication from "../Auth/Authentication";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import NewsDetails from "../page/NewsDetails";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <>Loading....</>,
      },
    ],
  },
  {
    path: "/auth",
    element: <Authentication></Authentication>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <>Loading....</>,
  },
  {
    path: "*",
    element: <h1>404 Error</h1>,
  },
]);

export default router;
