import { SmallContentMain } from "Design/LayoutMain.tsx";
import { Route } from "@tanstack/react-router";
import { rootRoute } from "App.tsx";
import { ContainerCard } from "Component/ContainerCard.tsx";
import { TextSpan } from "Component/TextSpan.tsx";

export const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,

});

export function About(){
  return <>
    <SmallContentMain>
      <ContainerCard title={"About"}>
        <TextSpan>Testing integration of MUI and tanstack-router.</TextSpan>
      </ContainerCard>

    </SmallContentMain>
  </>
}