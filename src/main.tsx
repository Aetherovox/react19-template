import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes.tsx";

let router = createBrowserRouter(routes);

hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
