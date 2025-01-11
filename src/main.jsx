import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import MyRouter from "./router/MyRouter";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={MyRouter} />
);
