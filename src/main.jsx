import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "flowbite";
import { createBrowserRouter, RouterProvider } from "react-router";
import IndexPage from "./pages/index.jsx";
import ProductPage from "./pages/product.jsx";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import HistoryPage from "./pages/history.jsx";
import ContactPage from "./pages/contact.jsx";
import CartProvider from "./context/CartContext.jsx";
import DataProducts from "./context/DataProduct.jsx";
import OngkirCotextProvider from "./context/DataOngkir.jsx";

const route = createBrowserRouter(
  [
    {
      path: "/",
      element: <IndexPage />,
    },
    {
      path: "/product",
      element: <ProductPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/history/:menu",
      element: <HistoryPage />,
    },
  ],
  {
    basename: "/Shoes-Shop",
  },
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProducts>
      <CartProvider>
        <OngkirCotextProvider>
          <RouterProvider router={route} />
        </OngkirCotextProvider>
      </CartProvider>
    </DataProducts>
  </StrictMode>,
);
