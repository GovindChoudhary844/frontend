// navbarReducer.js
import { UPDATE_NAVBAR_BRAND } from "../constants/navbarConstants";

const storedNavbarBrand = localStorage.getItem("navbarBrand");

const initialState = {
  navbarBrand: storedNavbarBrand || "Flowers",
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAVBAR_BRAND:
      console.log("Reducer: Updating Navbar Brand:", action.payload);
      return {
        ...state,
        navbarBrand: action.payload,
      };
    default:
      return state;
  }
};

export default navbarReducer;
