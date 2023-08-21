import './App.css'
import { CssBaseline } from "@mui/material";
import { TaterTheme } from "Design/TaterTheme.tsx";
import { ReactErrorBoundary } from "Error/ReactErrorBoundary.tsx";
import { TextSpan } from "Component/TextSpan.tsx";
import { AppNavBar } from "Design/AppNavBar.tsx";
import { LargeContentMain } from "Design/LayoutMain.tsx";

export function App() {
  return <TaterTheme>
    {/* force browser defaults for consistent display behaviour */}
    <CssBaseline/>
    {/* deal with "unhandled" errors from bad rendering logic */}
    <ReactErrorBoundary>
      <AppNavBar/>
      <LargeContentMain>
        <TextSpan>blah</TextSpan>
      </LargeContentMain>
    </ReactErrorBoundary>
  </TaterTheme>
}

