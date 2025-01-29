import { createSlice } from "@reduxjs/toolkit";
import { fetchCampersThunk, fetchCamperByIdThunk } from "./operations";

const initialState = {
    campers: [],
    selectedCamper: null,
    status: "idle",
    error: null,
};

const campersSlice = createSlice({
    name: "campers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampersThunk.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCampersThunk.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.campers = action.payload;
            })
            .addCase(fetchCampersThunk.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(fetchCamperByIdThunk.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCamperByIdThunk.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.selectedCamper = action.payload;
            })
            .addCase(fetchCamperByIdThunk.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export default campersSlice.reducer;
