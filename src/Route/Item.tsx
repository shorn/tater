import { SmallContentMain } from "Design/LayoutMain.tsx";
import { Route, useParams } from "@tanstack/react-router";
import { rootRoute } from "App.tsx";
import { ContainerCard } from "Component/ContainerCard.tsx";
import { TextSpan } from "Component/TextSpan.tsx";

export const itemViewRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'item/$itemId/view',
  component: ViewItem
});

export function ViewItem(){
  const params = useParams({from: itemViewRoute.id})
  return <>
    <SmallContentMain>
      <ContainerCard title={`View Item ${params.itemId}`}>
        <TextSpan>Description: "description of {params.itemId}"</TextSpan>
      </ContainerCard>

    </SmallContentMain>
  </>
}
