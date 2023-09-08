import { SmallContentMain } from "Design/LayoutMain.tsx";
import { Link as RouterLink, Route } from "@tanstack/react-router";
import { rootRoute } from "App.tsx";
import { ContainerCard } from "Component/ContainerCard.tsx";
import { Link as MuiLink, List, ListItem } from "@mui/material";
import { aboutRoute } from "Route/About.tsx";
import React from "react";
import {
  LinkPropsOptions as RouterLinkProps
} from "@tanstack/react-router/build/types/react";

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

export function Home(){
  return <>
    <SmallContentMain>
      <ContainerCard title={"Home"}>
        Go to:
        <List>

          <ListItem>
            <MuiLink href={aboutRoute.to}>About (Theme MuiLink)</MuiLink>
          </ListItem>

          {/* Doesn't compile - "no overload matches"

          <ListItem>
            <MuiLink component={RouterLink}
              to={aboutRoute.to}
            >About (Component MuiLink)</MuiLink>
          </ListItem>
          */}

          <ListItem>
            <RouterLink to={aboutRoute.to}
              preload={'intent'}
              /* without params/search, IDEA gives warning:
               `Element Link doesn't have required attribute xxx` */
              params={{}} search={{}}
            >
              About (router)
            </RouterLink>

          </ListItem>
        </List>

        <br/>
      </ContainerCard>

    </SmallContentMain>
  </>
}