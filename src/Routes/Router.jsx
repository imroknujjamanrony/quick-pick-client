import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <MainLayout></MainLayout>,
    //   errorElement: <ErrorPage></ErrorPage>,
    //   children: [
    //     {
    //         path: "/",
    //         element: <Home></Home>
    //     }
    //   ]
    // },

    {
    path: "/",
    element: <MainLayout />,
    // remove errorElement here
    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <ErrorPage /> } // catch all 404 inside layout
    ],
  },
  ]);