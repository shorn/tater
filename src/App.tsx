import './App.css'
import { CssBaseline } from "@mui/material";
import { TaterTheme } from "Design/TaterTheme.tsx";
import { ReactErrorBoundary } from "Error/ReactErrorBoundary.tsx";
import { AppNavBar } from "Design/AppNavBar.tsx";
import {
  Outlet,
  RootRoute,
  Router,
  RouterProvider
} from "@tanstack/react-router";
import React from "react";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { homeRoute } from "Route/Home.tsx";
import { aboutRoute } from "Route/About.tsx";
import { itemViewRoute } from "Route/Item.tsx";
import { notFoundRoute } from "Route/NotFound.tsx";

export function App() {
  return <TaterTheme>
    {/* force browser defaults for consistent display behaviour */}
    <CssBaseline/>
    {/* deal with "unhandled" errors from bad rendering logic */}
    <ReactErrorBoundary>
      <RouterProvider router={router} />
    </ReactErrorBoundary>
  </TaterTheme>
}

function AppRoot(){
  return <>
    <AppNavBar/>
    <Outlet />
    <TanStackRouterDevtools />
  </>
}

export const rootRoute = new RootRoute({
  component: AppRoot,
});

const routeTree = rootRoute.addChildren([
  homeRoute, aboutRoute, notFoundRoute,
  itemViewRoute
]);

const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

