import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";

function Hamburger() {

  const dispatch = useDispatch();

  const openSideMenu = () => {
    dispatch({ type: "SIDE_BAR_OPEN" });
    dispatch({ type: "HAMBURGER_CLICKED" });
  };

  return (
    <IconButton
      className='hamburger'
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
      sx={{ mr: 2 }}
      onClick={openSideMenu}
    >
      <MenuIcon />
    </IconButton>
  );
}

export default Hamburger;
