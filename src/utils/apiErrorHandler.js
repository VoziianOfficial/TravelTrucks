export const handleApiError = (error, thunkApi) => {
    if (error.response) {
        const backendMessage = error.response.data?.message || "An error occurred. Please try again.";
        return thunkApi.rejectWithValue(backendMessage);
    }
    return thunkApi.rejectWithValue("Something went wrong. Please try again.");
};
