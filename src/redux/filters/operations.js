//src/redux/filters/operations.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFilters } from "../../api/api";
import { handleApiError } from "../../utils/apiErrorHandler";


// get filters
export const fetchFiltersThunk = createAsyncThunk(
    "filters/fetchFilters",
    async (_, thunkApi) => {
        try {
            const response = await fetchFilters();
            return response.data;
        } catch (error) {
            return handleApiError(error, thunkApi);
        }
    }
);
