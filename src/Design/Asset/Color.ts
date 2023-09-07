// https://www.color-name.com/
// ordered here by color value
import { Theme } from "@mui/material";

export const color = {
  // black shades
  doNotUseBlack: "#000000",
  darkCharcoal: "#333333",
  jet: "#343434",
  onyx: "#343A40",

  // white shades
  lotion: "#FAFAFA",
  doNotUseWhite: "#FFFFFF"
}

/** use lightColor if light mode, otherwise use darkColor */
export function lightDarkColor(
  theme: Theme,
  lightColor: string | undefined = undefined,
  darkColor: string | undefined = undefined
): string | undefined{
  return theme.palette.mode === 'light' ? lightColor : darkColor
}

