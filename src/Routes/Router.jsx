import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Contact from "../Pages/Contact/Contact";
import DetailsPage from "../Pages/Details/DetailsPage.jsx";
import FilterProductPage from "../Pages/filter-products/FilterProductPage.jsx";


export const router = createBrowserRouter([

  {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
         { path: "*", 
          element: <ErrorPage /> } ,
        {
          path : "/products/:id",
          element : <DetailsPage/>,

        },
        {
          path : "/filter-products",
          element : <FilterProductPage/>
        },
         {
     path:'/contact',
         element:<Contact></Contact>
       }
      ]
    },
  ]);