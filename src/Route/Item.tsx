import { SmallContentMain } from "Design/LayoutMain.tsx";
import { Route, useParams } from "@tanstack/react-router";
import { rootRoute } from "App.tsx";
import { ContainerCard } from "Component/ContainerCard.tsx";
import { TextSpan } from "Component/TextSpan.tsx";

export const itemRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/item',
});

export const itemIdRoute = new Route({
  getParentRoute: () => itemRoute,
  path: '$itemId',
});

export const itemViewRoute = new Route({
  getParentRoute: () => itemIdRoute,
  path: 'view',
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

//export const itemEditRoute = new Route({
//  getParentRoute: () => itemIdRoute,
//  path: 'edit',
//  component: EditItem
//});
//
//export function EditItem(){
//  return <>
//    <SmallContentMain>
//      <ContainerCard title={"Edit Item blah"}>
//        <TextSpan>Description: "description of blah"</TextSpan>
//      </ContainerCard>
//
//    </SmallContentMain>
//  </>
//}