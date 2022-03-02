import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";
import React from "react";

function UserMenu() {
  return (
    <>
      <IconButton sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </IconButton>
    </>
  );
}

export default UserMenu;
