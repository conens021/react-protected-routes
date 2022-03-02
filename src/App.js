import {  CssBaseline, ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import { darkTheme,lightTheme } from "./theme/theme";

function App() {

  const isLoggedIn = true 

  const routing = useRoutes(routes(isLoggedIn));

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
}

export default App;
