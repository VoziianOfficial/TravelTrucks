//src/redux/campers/operations.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampers as fetchCampersService, fetchCamperById as fetchCamperByIdService } from "../../services/campersService";
import { handleApiError } from "../../utils/apiErrorHandler";


// get all campers
export const fetchCampersThunk = createAsyncThunk(
    "campers/fetchAll",
    async (params, thunkApi) => {
        try {
            return await fetchCampersService(params);
        } catch (error) {
            return handleApiError(error, thunkApi);
        }
    }
);

// get camper by id
export const fetchCamperByIdThunk = createAsyncThunk(
    "campers/fetchById",
    async (id, thunkApi) => {
        try {
            return await fetchCamperByIdService(id);
        } catch (error) {
            return handleApiError(error, thunkApi);
        }
    }
);