import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Details from "../pages/Details";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        { path: ":countryName", element: <Details /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routes;
