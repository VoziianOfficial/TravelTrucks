//src/redux/campers/campersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampers } from '../../api/api';


const initialState = {
    campers: [],
    status: 'idle',
    error: null,
};

export const fetchCampersThunk = createAsyncThunk('campers/fetchCampers', async (params) => {
    const response = await fetchCampers(params);
    return response.data;
});

const campersSlice = createSlice({
    name: 'campers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampersThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCampersThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.campers = action.payload;
            })
            .addCase(fetchCampersThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default campersSlice.reducer;