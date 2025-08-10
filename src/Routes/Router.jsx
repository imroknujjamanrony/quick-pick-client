import { createBrowserRouter } from "react-router-dom";
// Imports from both branches

import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Contact from "../Pages/Contact/Contact";
import DetailsPage from "../Pages/Details/DetailsPage.jsx";
import FilterProductPage from "../Pages/filter-products/FilterProductPage.jsx";
import AuthTab from "../Components/AuthTab.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product/:id",
        element: <DetailsPage />,

      },

      {
        path: "/filter-products",
        element: <FilterProductPage />,
      },
      {
        path: "/tabs",
        element: <AuthTab></AuthTab>,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
