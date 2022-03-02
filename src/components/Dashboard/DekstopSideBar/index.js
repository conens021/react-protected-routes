import { Badge, Box, Divider, Paper } from "@mui/material";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';

import "../../../styles/dekstop-side-bar.css";
import ListItem from "../../UI/ListItem";

function DekstopSideBar() {
  return (
    <Box
      elevation={3}
      backgroundColor="background.dark"
      className="dekstop-side-bar"
    >
      <ul className="menu-list">
        <li className="menu-sublist">
          <ul className="menu-items">
            <li className="header">List header</li>
            <ListItem active={true}>
              <HomeIcon className='icon' size="small" />
              <Badge color="secondary" badgeContent="2"><Box sx={{marginRight:'1em'}}>Dashboard</Box></Badge>
            </ListItem>
            <ListItem >
              <FavoriteBorderOutlinedIcon className='icon'  size="small" />
              Favorites
            </ListItem>
            <ListItem>
              <FeaturedPlayListOutlinedIcon className='icon'  size="small" />
              Collections
            </ListItem>
          </ul>
        </li>
        <li className="menu-sublist">
          <ul className="menu-items">
            <li className="header">List header</li>
            <ListItem>
              <FavoriteBorderOutlinedIcon className='icon'  size="small" />
              Favorites
            </ListItem>
            <ListItem>
              <FavoriteBorderOutlinedIcon className='icon'  size="small" />
              Favorites
            </ListItem>
            <ListItem>
              <FavoriteBorderOutlinedIcon className='icon'  size="small" />
              Favorites
            </ListItem>
          </ul>
        </li>
        <li className="menu-sublist">
          <ul className="menu-items">
            <li className="header">List header</li>
            <ListItem>
              <FavoriteBorderOutlinedIcon className='icon'  size="small" />
              Favorites
            </ListItem>
            <ListItem>
              <FavoriteBorderOutlinedIcon className='icon'  size="small" />
              Favorites
            </ListItem>
            <ListItem>
              <FavoriteBorderOutlinedIcon className='icon'  size="small" />
              Favorites
            </ListItem>
          </ul>
        </li>
        <li className="menu-sublist">
          <ul className="menu-items">
            <li className="header">List header</li>
            <ListItem>
              <FavoriteBorderOutlinedIcon className='icon'  size="small" />
              Favorites
            </ListItem>
            <ListItem>
              <FavoriteBorderOutlinedIcon className='icon'  size="small" />
              Favorites
            </ListItem>
            <ListItem>
              <FavoriteBorderOutlinedIcon className='icon'  size="small" />
              Favorites
            </ListItem>
          </ul>
        </li>
      
        <Divider />
      </ul>
    </Box>
  );
}

export default DekstopSideBar;
