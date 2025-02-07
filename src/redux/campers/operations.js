// src/redux/campers/operations.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleApiError } from "../../utils/apiErrorHandler";

const API_BASE_URL = "https://traveltrucks-backend.onrender.com/api/campers";

// Обработка ошибки с проверкой
export const fetchCampersThunk = createAsyncThunk(
    "campers/fetchAll",
    async (filters, thunkApi) => {
        try {
            const filteredParams = {};
            for (const key in filters) {
                if (filters[key] !== false) {
                    filteredParams[key] = filters[key];
                }
            }

            const { data } = await axios.get(API_BASE_URL, {
                params: filteredParams,
            });

            if (!data.data || !Array.isArray(data.data.items)) {
                return [];
            }

            console.log("API Response:", data);
            return data.data.items; // Возвращаем массив или пустой массив
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
            const response = await axios.get(`${API_BASE_URL}/${id}`);
            return response.data.data;
        } catch (error) {
            return handleApiError(error, thunkApi);
        }
    }
);
