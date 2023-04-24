import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Navbar from "./composant/Navbar/Navbar.jsx";
import Error from "./Pages/Error.jsx";
import ApartmentPage from "./Pages/ApartmentPage";
import About from "./Pages/About.jsx";

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/flat",
        element: <ApartmentPage />,
      },
      {
        path: "/About",
        element: <About />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
