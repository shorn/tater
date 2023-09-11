import { SmallContentMain } from "Design/LayoutMain.tsx";
import { ContainerCard } from "Component/ContainerCard.tsx";
import { TextSpan } from "Component/TextSpan.tsx";
import { Route } from "@tanstack/react-router";
import { rootRoute } from "App.tsx";

export const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '$',
  component: NotFound,

});

export function NotFound(){
  return <>
    <SmallContentMain>
      <ContainerCard title={"Page not found"}>
        <TextSpan>No page found.</TextSpan>
      </ContainerCard>

    </SmallContentMain>
  </>
}