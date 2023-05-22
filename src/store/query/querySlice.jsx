import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: null,
    loading: false,
    error: null,
};

export const fetchData = createAsyncThunk('queryReducer/fetchData', async () => {
    const localData = localStorage.getItem("data");
    if (localData) {
        return JSON.parse(localData);
    } else {
        const response = await axios.get('https://dummyjson.com/products');
        const responseData = response.data;
        localStorage.setItem("data", JSON.stringify(responseData));
        return responseData;
    }
});

const queryReducer = createSlice({
    name: 'queryReducer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default queryReducer.reducer;