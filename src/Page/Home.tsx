import { SmallContentMain } from "Design/LayoutMain.tsx";
import { Route } from "@tanstack/react-router";
import { rootRoute } from "App.tsx";

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

export function Home(){
  return <>
    <SmallContentMain>Home</SmallContentMain>
  </>
}