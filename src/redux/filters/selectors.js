//src/redux/filters/selectors.js

export const selectFilters = (state) => state.filters.filters;
export const selectFiltersStatus = (state) => state.filters.status;
export const selectFiltersError = (state) => state.filters.error;
