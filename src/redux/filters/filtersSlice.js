// src/redux/filters/filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchFiltersThunk } from "./operations.js";

const initialState = {
    filters: [],
    status: "idle",
    error: null,
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFiltersThunk.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFiltersThunk.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.filters = action.payload;
            })
            .addCase(fetchFiltersThunk.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export default filtersSlice.reducer;
