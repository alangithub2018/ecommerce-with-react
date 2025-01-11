import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Error404 from "../components/pages/Error404";
import Products from "../components/pages/Products";
import App from "../template/App";
import Login from "../components/pages/Login";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default MyRouter;
