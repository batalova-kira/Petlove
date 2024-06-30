import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://petlove.b.goit.study/api/",
});

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async ({ page, limit }, thunkApi) => {
        try {
            const { data } = await instance.get(
                `/news?page=${page}&limit=${limit}`
            );
            console.log("Response data:", data);
            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
);
