import { SmallContentMain } from "Design/LayoutMain.tsx";
import { Link as RouterLink, Route, useNavigate } from "@tanstack/react-router";
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
  const nav = useNavigate({from: homeRoute.to});

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
          <ListItem>
            <MuiLink component={RouterLink}
              to={itemViewRoute.to}
              preload={'intent'}
              search={{}} params={{itemId: '42'}}
            >
              View Item 42 (MuiLink)
            </MuiLink>
          </ListItem>
          */}

          {/* does go to the intended route, but:
          - typing doesn't work - no suggestions, no errors if params is wrong
          - because it uses onClick, user can't focus to preview href
          */}
          <ListItem>
            <MuiLink onClick={
              ()=> nav({to: itemViewRoute.to, params: {itemId: "42"}, search: {}})
            }>
              View Item 42 (MuiLink onClick)
            </MuiLink>
          </ListItem>

          <ListItem>
            {/* no MUI styles or functionality */}
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