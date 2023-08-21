import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { People } from "@mui/icons-material";


export function AppDrawer(props: {
  anchor: 'left' |'right',
  open: boolean,
  toggleDrawer: (open:boolean)=>void,
}){

  const sideList = (
    // hardcoded width reminds folks that mobile is a thing
    <div style={{width: 250}}>
      <List>
        <ListNavButton href={"page1"}
          isCurrent={false}
           description={"Page 1"}
          icon={<HomeIcon/>}
        />
        <ListNavButton href={"page2"}
          isCurrent={false}
          description="Page 2"
          icon={<People/>}/>
      </List>
    </div>
  );

  // const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  const onClose = ()=> props.toggleDrawer(false);
  return <SwipeableDrawer
    // disableBackdropTransition={!iOS}
    // disableDiscovery={iOS}
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
      {sideList}
    </div>
  </SwipeableDrawer>;
}

function ListNavButton(props: {
  href: string,
  description: string,
  icon?: JSX.Element,
  adminOnly?: boolean,
  isCurrent: boolean,
}){
  const {isCurrent} = props;
  const description = <span style={{fontWeight: isCurrent ? "bold":"normal"}}>
    {props.description}
  </span>;

  return <ListItemButton href={props.href}
    //onClick={event=>nav.navigateTo(props.href, event)}
  >
    { props.icon &&
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
    }
    <ListItemText primary={description} />
  </ListItemButton>;
}
