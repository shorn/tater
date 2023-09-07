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
import { homeRoute } from "Page/Home.tsx";
import { aboutRoute } from "Page/About.tsx";

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
  homeRoute,
  aboutRoute
]);

const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

