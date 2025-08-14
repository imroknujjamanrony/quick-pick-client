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
import PrivacyPolicy from "../Components/PrivacyPolicy.jsx";
import UpdateToVendor from "../Pages/UpdateToVendor.jsx";


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
        path: '/privacypolicy',
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
path: '/updatetovendor',
element: <UpdateToVendor></UpdateToVendor>
      },
   
  {
  path: "/blogs",
  element: <Blogs></Blogs>,
  loader: async () => {
    const blogsRes = await fetch('https://quick-pick-server-zeta.vercel.app/jinStoreBlogsCollection');
    const countRes = await fetch('https://quick-pick-server-zeta.vercel.app/blogsCollectionCount');

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
    ],
  },
]);
