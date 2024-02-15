// navbarActions.js
import { UPDATE_NAVBAR_BRAND } from "../constants/navbarConstants";

export const updateNavbarBrand = (newBrand) => (dispatch) => {
  console.log("Updating Navbar Brand:", newBrand);
  localStorage.setItem("navbarBrand", newBrand);
  dispatch({
    type: UPDATE_NAVBAR_BRAND,
    payload: newBrand,
  });
};
