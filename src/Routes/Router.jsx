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
import Blogs from "../Pages/Blogs/Blogs.jsx";
import AuthTab from "../Components/AuthTab.jsx";
import CartPage from "../Pages/Cart/Cart.jsx";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage.jsx";


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
  path: "/blogs",
  element: <Blogs></Blogs>,
  loader: async () => {
    const blogsRes = await fetch('http://localhost:5000/jinStoreBlogsCollection');
    const countRes = await fetch('http://localhost:5000/blogsCollectionCount');

    const blogs = await blogsRes.json();
    const count = await countRes.json();

    return { blogs, count };
  }
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
      {
        path: "/cart",
        element: <CartPage></CartPage>,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      }
    ],
  },
]);
