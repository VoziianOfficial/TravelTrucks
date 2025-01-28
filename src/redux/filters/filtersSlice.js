// src/redux/filters/filtersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFilters } from '../../api/api';

const initialState = {
    filters: [],
    status: 'idle',
    error: null,
};

export const fetchFiltersThunk = createAsyncThunk('filters/fetchFilters', async (params) => {
    const response = await fetchFilters(params)
    return response.data;
});

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFiltersThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFiltersThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.filters = action.payload;
            })
            .addCase(fetchFiltersThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default filtersSlice.reducer;