import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchIconWrapper from "../../UI/Search/SearchIconWrapper";
import Search from "../../UI/Search/Search";
import StyledInputBase from "../../UI/Search/SearchInputBase";

function SearchBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        sx={{ width: "100%" }}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}

export default SearchBar;
