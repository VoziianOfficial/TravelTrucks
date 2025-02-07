//src/redux/campers/selectors.js

export const selectCampers = (state) => state.campers.campers;
export const selectCampersStatus = (state) => state.campers.status;
export const selectorCampersCurrent = (state) => state.campers.status;
export const selectCampersError = (state) => state.campers.error;
export const selectFilters = (state) => state.campers.filters;
export const selectFavorites = (state) => state.campers.favorites;
export const selectCamperDetails = (state) => state.campers.camperDetails;
export const selectCamperDetailsStatus = (state) => state.campers.camperDetailsStatus;
export const selectNoResults = (state) => state.campers.noResults;
export const selectLocation = (state) => state.filters.location;
export const selectTotalCampers = (state) => state.campers.totalCampers;
export const selectIsLoading = (state) => state.campers.isLoading;
