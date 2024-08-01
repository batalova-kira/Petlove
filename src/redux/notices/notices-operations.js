import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://petlove.b.goit.study/api/",
});

export const fetchNotices = createAsyncThunk(
    "notices/fetchNotices",
    async ({ page, limit, category, keyword }, thunkApi) => {
        try {
            // Перевіряємо, чи всі параметри мають значення
            if (page === null || limit === null) {
                throw new Error("Page or limit cannot be null");
            }

            const queryString = new URLSearchParams({
                page,
                limit,
                ...(category && { category }), // Додаємо category лише якщо він не пустий
                ...(keyword && { keyword }),
            }).toString();

            const { data } = await instance.get(`/notices?${queryString}`);
            console.log("Response notices:", data);
            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
);

export const fetchCategories = createAsyncThunk(
    "filters/fetchCategories",
    async (_, thunkApi) => {
        try {
            const { data } = await instance.get(`/notices/categories`);
            console.log("Response Categories:", data);
            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
);
