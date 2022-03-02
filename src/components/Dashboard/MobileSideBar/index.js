import {
  Box,
  ClickAwayListener,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import MobileSideBar from "../../UI/MobileSideBar/MobileSideBar";
import CloseIcon from "@mui/icons-material/Close";
import "../../../styles/mobile-side-bar.css";
import { useEffect } from "react";

function MobileSideBarComponent() {
  const sideBarOpen = useSelector((state) => state.sideBarOpen);
  const hamburgerClicked = useSelector((state) => state.isHamburgerClicked);

  const dispatch = useDispatch();

  const closeSideBar = () => {
    dispatch({ type: "SIDE_BAR_CLOSE" });
  };

  const handleClickAway = () => {
    if (sideBarOpen && !hamburgerClicked) {
      closeSideBar();
    }
  };

  useEffect(() => {
    if(sideBarOpen){
      dispatch({type:'HAMBURGER_UNCLICKED'})
    }
  }, [sideBarOpen]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <MobileSideBar show={sideBarOpen}>
        <Paper elevation={3} sx={{ height: "100%", width: "100%" }}>
          <Box className="side-bar-heading">
            <IconButton color="primary" onClick={closeSideBar}>
              <CloseIcon sx={{ cursor: "pointer" }} />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Snippet Master
            </Typography>
          </Box>
        </Paper>
      </MobileSideBar>
    </ClickAwayListener>
  );
}

export default MobileSideBarComponent;
