import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
