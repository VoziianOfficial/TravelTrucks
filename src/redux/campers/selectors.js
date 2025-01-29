//src/redux/campers/selectors.js

export const selectCampers = (state) => state.campers.campers;
export const selectCampersStatus = (state) => state.campers.status;
export const selectCampersError = (state) => state.campers.error;