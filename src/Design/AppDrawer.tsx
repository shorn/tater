import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import {
  Link as MuiLink,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Info } from "@mui/icons-material";
import { aboutRoute } from "Page/About.tsx";
import { homeRoute } from "Page/Home.tsx";
import {
  Link as RouterLink,
  useNavigate,
  useRouter
} from "@tanstack/react-router";

/**
 * Testing out integration of the router with MUI ListItem components.
 *
 * Currently, there's a "home" item and a bunch of different implementations
 * of the "/about" item, but I'm not happy with how any of them work.
 */
export function AppDrawer(props: {
  anchor: 'left' |'right',
  open: boolean,
  toggleDrawer: (open:boolean)=>void,
}){
  const nav = useNavigate();
  const router = useRouter();

  const sideMenu = (
    <div style={{width: 250}}>
      <List>
        {/* This is here so I can "reset" the page back to `/` so I can easily
        tell if the navigation to `/about` even works */}
        <ListItemButton href={homeRoute.to}
          selected={!!router.matchRoute(homeRoute)}>
          <ListItemIcon><HomeIcon/></ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItemButton>

        {/* Styling is off because MUI doesn't know about RouterLink and because
        List is expected to work with ListItem/ListItemButton components,
        not anchors.
        Nice typing:
        - can use an auto-completed string for `to`,
        - it knows about preload, and I assume params and search are typed
        But it doesn't function properly:
        - highlight on hover, I assume other things too
        */}
        <RouterLink to={aboutRoute.to} preload={'intent'}
          /* without params/search, IDEA gives warning:
           `Element Link doesn't have required attribute xxx` */
          params={{}} search={{}}
        >
          <ListItem selected={!!router.matchRoute(aboutRoute)}>
            <ListItemIcon><Info/></ListItemIcon>
            <ListItemText primary={"About (Link)"} />
          </ListItem>
        </RouterLink>

        {/* styled and fully functional, but no typing support:
        - no completion for href
        - no support for search, params, etc.
        - no support for attributes like `preload` */}
        <ListItemButton href={aboutRoute.to}
          selected={!!router.matchRoute(aboutRoute)}
        >
          <ListItemIcon><Info/></ListItemIcon>
          <ListItemText primary={"About (ListItemButton)"} />
        </ListItemButton>

        {/* at least search/params are usable, probably not typed though */}
        <ListItemButton
          selected={!!router.matchRoute(aboutRoute)}
          onClick={()=> nav({to: aboutRoute.to, search: {}, params: {}})}
        >
          <ListItemIcon><Info/></ListItemIcon>
          <ListItemText primary={"About (onClick)"} />
        </ListItemButton>

        {/* bad styling, bad typing */}
        <MuiLink href={aboutRoute.to}>
          About (MuiLink)
        </MuiLink>

        {/* Doesn't compile - "no overload matches"

        <MuiLink component={RouterLink} to="/about">
          With prop forwarding
        </MuiLink>
        */}

      </List>
    </div>
  );

  const onClose = ()=> props.toggleDrawer(false);

  return <SwipeableDrawer
    open={props.open}
    onClose={onClose}
    onOpen={()=> props.toggleDrawer(true)}
    anchor={props.anchor}
  >
    <div
      tabIndex={0}
      role="button"
      onClick={onClose}
      onKeyDown={onClose}
    >
      {sideMenu}
    </div>
  </SwipeableDrawer>;
}

