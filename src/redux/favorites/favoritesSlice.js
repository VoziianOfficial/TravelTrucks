//src/redux/favorites/favoritesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchFavoritesThunk } from "./operations.js";

const initialState = {
    favorites: [],
    status: "idle",
    error: null,
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavoritesThunk.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFavoritesThunk.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.favorites = action.payload;
            })
            .addCase(fetchFavoritesThunk.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export default favoritesSlice.reducer;
