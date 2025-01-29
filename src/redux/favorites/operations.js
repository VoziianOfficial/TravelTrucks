//src/redux/favorites/operations.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFavorites } from "../../api/api";
import { handleApiError } from "../../utils/apiErrorHandler";


//get favorite campers

export const fetchFavoritesThunk = createAsyncThunk(
    "favorites/fetchFavorites",
    async (params, thunkApi) => {
        try {
            const response = await fetchFavorites(params);
            return response.data;
        } catch (error) {
            return handleApiError(error, thunkApi);
        }
    }
);