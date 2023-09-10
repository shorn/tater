import { SmallContentMain } from "Design/LayoutMain.tsx";
import { Link as RouterLink, Route } from "@tanstack/react-router";
import { rootRoute } from "App.tsx";
import { ContainerCard } from "Component/ContainerCard.tsx";
import { Link as MuiLink, List, ListItem } from "@mui/material";
import { aboutRoute } from "Route/About.tsx";
import React from "react";
import { itemViewRoute } from "Route/Item.tsx";

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

export function Home(){
  return <>
    <SmallContentMain>
      <ContainerCard title={"Home"}>
        Go to:
        <List>

          <ListItem>
            <MuiLink component={RouterLink}
              to={aboutRoute.to}
              preload={'intent'}
              search={{}} params={{}}
            >About</MuiLink>
          </ListItem>

          {/* compile error:
          Type '{ itemId: string; }' is not assignable to type 'Omit<never, never>'.
          */}
          <ListItem>
            <MuiLink component={RouterLink}
              to={itemViewRoute.to}
              preload={'intent'}
              search={{}} params={{itemId: '42'}}
            >
              View Item 42 (MuiLink)
            </MuiLink>
          </ListItem>

          <ListItem>
            <RouterLink to={itemViewRoute.to}
              params={{itemId: "42"}} search={{}}
            >
              View Item 42 (RouterLink)
            </RouterLink>
          </ListItem>


        </List>

        <br/>
      </ContainerCard>

    </SmallContentMain>
  </>
}