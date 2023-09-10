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
import { aboutRoute } from "Route/About.tsx";
import { homeRoute } from "Route/Home.tsx";
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
  const router = useRouter();

  const sideMenu = (
    <div style={{width: 250}}>
      <List>
        {/* This is here so I can "reset" the page back to `/` so I can easily
        tell if the navigation to `/about` even works */}
        <ListItemButton component={RouterLink} to={homeRoute.to}
          preload={'intent'}
          selected={!!router.matchRoute(homeRoute)}
          search={{}} params={{}}
        >
          <ListItemIcon><HomeIcon/></ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItemButton>

        <ListItemButton component={RouterLink} to={aboutRoute.to}
          preload={'intent'}
          selected={!!router.matchRoute(aboutRoute)}
          search={{}} params={{}}
        >
          <ListItemIcon><Info/></ListItemIcon>
          <ListItemText primary={"About (ListItemButton)"} />
        </ListItemButton>

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

