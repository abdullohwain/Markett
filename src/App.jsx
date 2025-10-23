import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home, Product, Purchase } from "./pages";
import { loader as homeLoader } from "./pages/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/cart-products",
          element: <Purchase />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
