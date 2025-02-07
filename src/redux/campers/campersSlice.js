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
    reducers: {
        toggleFavorite: (state, action) => {
            const camperId = action.payload;
            const camper = state.campers.find(c => c.id === camperId);
            if (camper) {
                camper.isFavorite = !camper.isFavorite;
            }
        }
    },
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
                state.error = action.error.message;
            })
            .addCase(fetchCamperByIdThunk.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.selectedCamper = action.payload;
            })
            .addCase(fetchCamperByIdThunk.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { toggleFavorite, resetCampers } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
