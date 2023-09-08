import { createTheme, ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";
import { Link as RouterLink, LinkPropsOptions as RouterLinkProps } from "@tanstack/react-router";
import { color } from "Design/Asset/Color.ts";
import { nativeFontStack } from "Design/Asset/Font.ts";

// from https://mui.com/material-ui/guides/routing/#global-theme-link
export const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

const muiLightTheme = createTheme({

  components: {

    // from https://mui.com/material-ui/guides/routing/#global-theme-link
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as RouterLinkProps,
    },
    MuiButtonBase: {
      // should be something like `as RouteButtonProps`?
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },

    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: color.onyx,
        }
      }
    },

  },

  typography: {
    fontFamily: nativeFontStack.join(',')
  },

  palette: {
    mode: 'light',
    background: {
      default: color.lotion
    },
  },

});

export function TaterTheme({children}: { children: ReactNode }){
  return <ThemeProvider theme={muiLightTheme}>
    {children}
  </ThemeProvider>
}
