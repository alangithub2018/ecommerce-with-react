import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import MyRouter from "./router/MyRouter";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={MyRouter} />
);
