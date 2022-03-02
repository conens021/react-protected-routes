import darkScrollbar from "@mui/material/darkScrollbar";
import { createTheme } from "@mui/material";

const staticTheme = {
  primary: {
    main: "#01579b",
  },
  secondary: {
    main: "#cddc39",
  },
};

export const lightTheme = createTheme({
  palette: {
    ...staticTheme,
    background: {
      default: "#e4f0e2",
    },
    text: {
      primary: "#1a1a1a",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    ...staticTheme,
    background: {
      default: "#262626",
      dark: "#1a1a1a",
      paper: "#333333",
    },
    text: {
      primary: "#f2f2f2",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
  },
});
