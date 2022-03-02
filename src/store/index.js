import { createStore } from "redux";
const initialState = {
  sideBarOpen: false,
  isHamburgerClicked: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIDE_BAR_OPEN":
      return { ...state, sideBarOpen: true };
    case "SIDE_BAR_CLOSE":
      return { ...state, sideBarOpen: false };
    case "HAMBURGER_CLICKED":
      return { ...state, isHamburgerClicked: true };
    case "HAMBURGER_UNCLICKED":
      return { ...state, isHamburgerClicked: false };
    default:
      return {
        ...state,
      };
  }
};

const store = createStore(rootReducer);

export default store;
