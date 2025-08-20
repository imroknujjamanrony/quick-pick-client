import { createBrowserRouter } from "react-router-dom";

// Layouts & Common Pages
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

// Extra Components from main
import AddProduct from "../components/AddProduct.jsx";
import ProductTable from "../components/product/ProductTable.jsx";
import AdminProducts from "../components/product/Admin-Products.jsx";
import EditProduct from "../Pages/filter-products/EditProduct.jsx";
import BlogsDetails from "../Pages/Blogs/BlogsDetails.jsx";
import CartPage from "../Pages/Cart/Cart.jsx";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage.jsx";
import UsersTable from "../Components/UsersTable.jsx";
import AdminLayout from "../Layouts/admin/AdminLayout.jsx";
import AdminHome from "../Pages/admin/AdminHome.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/updatetovendor",
        element: <UpdateToVendor />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: async () => {
          const blogsRes = await fetch(
            "https://quick-pick-server-zeta.vercel.app/jinStoreBlogsCollection"
          );
          const countRes = await fetch(
            "https://quick-pick-server-zeta.vercel.app/blogsCollectionCount"
          );

          const blogs = await blogsRes.json();
          const count = await countRes.json();

          return { blogs, count };
        },
      },
      {
        path: "/blogs/:id",
        element: <BlogsDetails />,
        loader: ({ params }) =>
          fetch(
            `https://quick-pick-server-zeta.vercel.app/jinStoreBlogsCollection/${params.id}`
          ),
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
        element: <AuthTab />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminHome /> },
      { path: "products", element: <AdminProducts /> },
      { path: "product-edit/:id", element: <EditProduct /> },
      { path: "users", element: <UsersTable /> },
      { path: "add-product", element: <AddProduct /> },
      {
        path: "product-edit/:id",
        element: <EditProduct />,
      },
    ],
  },
]);
