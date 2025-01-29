//src/services/campersService
import { campersApi } from "./api";

//get all campers with filters 
export const fetchCampers = async (params) => {
    const response = await campersApi.get("/campers", { params });
    return response.data;
};

// get details of campers by Id
export const fetchCamperById = async (id) => {
    const response = await campersApi.get(`/campers/${id}`);
    return response.data;
}