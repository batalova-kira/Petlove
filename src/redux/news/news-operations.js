import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://petlove.b.goit.study/api/",
});

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async ({ page, limit, keyword }, thunkApi) => {
        try {
            const queryString = new URLSearchParams({
                page,
                limit,
                ...(keyword && { keyword }), // Додаємо keyword лише якщо він не пустий
            }).toString();

            const { data } = await instance.get(`/news?${queryString}`);
            console.log("Response data:", data);
            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
);
