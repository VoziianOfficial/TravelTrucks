import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations";

const initialState = {
    campers: [],         // Список кемперов
    currentCamper: null, // Выбранный кемпер (для детальной страницы)
    totalCampers: null,  // Общее количество кемперов (если сервер передает)
    isLoading: false,    // Флаг загрузки
    error: null,         // Ошибки API
};

const campersSlice = createSlice({
    name: "campers",
    initialState,
    reducers: {
        resetCampers: (state) => {
            state.campers = [];
            state.totalCampers = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // 🔹 Загрузка списка кемперов
            .addCase(fetchCampers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.totalCampers = action.payload.total;

                // Фильтруем дубликаты (если загружаем следующую страницу)
                const newCampers = action.payload.items.filter(
                    (newCamper) =>
                        !state.campers.some(
                            (existingCamper) => existingCamper.id === newCamper.id
                        )
                );
                state.campers = [...state.campers, ...newCampers];
            })
            .addCase(fetchCampers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // 🔹 Загрузка одного кемпера по ID
            .addCase(fetchCamperById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCamperById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentCamper = action.payload;
            })
            .addCase(fetchCamperById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// 🔹 Экспорт экшенов и редюсера
export const { resetCampers } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
