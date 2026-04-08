// App.jsx
// This file creates the router and defines all routes

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import ProductsList from "./Components/ProductsList";
import Product from "./Components/Product";
import ContactUS from "./Components/ContactUS";

export default function App() {

  // create router object
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />, // common layout
      children: [
        // Home page
        {
          index: true,
          element: <Home />
        },
        // Products list page
        {
          path: "products",
          element: <ProductsList />
        },

        // Single product page
        {
          path: "product",
          element: <Product />
        },

        // Contact page
        {
          path: "contact",
          element: <ContactUS />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={routerObj} />
  );
}
