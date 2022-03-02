import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger";
import UserMenu from "./UserMenu";
import Logo from "./Logo";

import '../../../styles/header.css'

export default function Header() {
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  return (
    <Box className="header">
      <AppBar color="primary" position="static">
        <Toolbar>
          <Hamburger />
          <Logo />
          <Box className="search-bar">
            <SearchBar />
          </Box>
          <Box className="user-menu">
            <UserMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
