import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "1000": "#000",
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "150": "#C4C4C4",
      "125": "#E5E5E5",
      "100": "#D1D2DC",
      "75": "#F4F4F4",
      "25": "#F5F5F5",
      "0": "#FFF",
    },
  },
  fonts: {
    body: "Roboto",
    heading: "Roboto"
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true
  },
})