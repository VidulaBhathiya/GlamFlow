import { createBrowserRouter } from "react-router";
import type { ComponentType } from "react";
import Root from "./pages/Root";

const lazyPage =
  (importPage: () => Promise<{ default: ComponentType }>) =>
  async () => {
    const pageModule = await importPage();
    return { Component: pageModule.default };
  };

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, lazy: lazyPage(() => import("./pages/Home")) },
      { path: "services", lazy: lazyPage(() => import("./pages/Services")) },
      { path: "about", lazy: lazyPage(() => import("./pages/About")) },
      { path: "stylists", lazy: lazyPage(() => import("./pages/Stylists")) },
      { path: "locations", lazy: lazyPage(() => import("./pages/Locations")) },
      { path: "shop", lazy: lazyPage(() => import("./pages/Shop")) },
      { path: "contact", lazy: lazyPage(() => import("./pages/Contact")) },
      { path: "booking", lazy: lazyPage(() => import("./pages/Booking")) },
    ],
  },
]);
