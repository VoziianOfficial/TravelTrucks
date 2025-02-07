//src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from '../redux/campers/campersSlice';

const store = configureStore({
    reducer: {
        campers: campersReducer,
    },
});

export default store;