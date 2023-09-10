import { SmallContentMain } from "Design/LayoutMain.tsx";
import { Link as RouterLink, Route } from "@tanstack/react-router";
import { rootRoute } from "App.tsx";
import { ContainerCard } from "Component/ContainerCard.tsx";
import { Link as MuiLink, List, ListItem } from "@mui/material";
import { aboutRoute } from "Route/About.tsx";
import React from "react";

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

        </List>

        <br/>
      </ContainerCard>

    </SmallContentMain>
  </>
}