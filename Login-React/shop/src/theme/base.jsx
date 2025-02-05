import { createTheme } from "@mui/material/styles";

// Tema base
export const BaseTheme = createTheme({
  palette: {
    primary: {
      main: "#5E97F6",
    },
    secondary: {
      main: "#BDBDBD",
    },
    error: {
      main: "#E57373",
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
});
