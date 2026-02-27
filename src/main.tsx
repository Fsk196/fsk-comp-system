import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout/index.tsx";
import HomeLayout from "./Layouts/HomeLayout/HomeLayout.tsx";
import Component from "./pages/Component.tsx";
import Installation from "./pages/Installation.tsx";
import Theme from "./pages/Theme.tsx";
import Button from "./pages/Button.tsx";
import Badge from "./pages/Badge.tsx";
import Input from "./pages/Input.tsx";
import Modal from "./pages/Modal.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [{ index: true, Component: App }],
  },
  {
    path: "/docs",
    Component: RootLayout,
    children: [
      {
        path: "component",
        Component: Component,
      },
      {
        index: true,
        path: "themes",
        Component: Theme,
      },
      {
        index: true,
        path: "installation",
        Component: Installation,
      },
      { path: "component/button", Component: Button },
      { path: "component/badge", Component: Badge },
      { path: "component/input", Component: Input },
      { path: "component/modal", Component: Modal },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
