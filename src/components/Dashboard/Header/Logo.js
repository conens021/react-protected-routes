import { Typography } from "@mui/material";

function Logo() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
    >
      Snippet Master
    </Typography>
  );
}

export default Logo;
