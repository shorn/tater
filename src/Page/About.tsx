import { SmallContentMain } from "Design/LayoutMain.tsx";
import { Route } from "@tanstack/react-router";
import { rootRoute } from "App.tsx";

export const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

export function About(){
  return <>
    <SmallContentMain>About</SmallContentMain>
  </>
}