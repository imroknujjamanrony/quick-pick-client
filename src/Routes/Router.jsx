import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([

    {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <ErrorPage /> } ,
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ],
  },
  ]);