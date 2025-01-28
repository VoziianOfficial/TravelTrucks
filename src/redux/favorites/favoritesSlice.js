//src/redux/favorites/favoritesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFavorites } from '../../api/api';


const initialState = {
    favorites: [],
    status: 'idle',
    error: null,
};

export const fetchFavoritesThunk = createAsyncThunk('favorites/fetchFavorites', async (params) => {
    const response = await fetchFavorites(params);
    return response.data;
});

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavoritesThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFavoritesThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.favorites = action.payload;
            })
            .addCase(fetchFavoritesThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default favoritesSlice.reducer;