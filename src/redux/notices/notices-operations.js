import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://petlove.b.goit.study/api/",
});

export const fetchNotices = createAsyncThunk(
    "notices/fetchNotices",
    async ({ page, limit, category }, thunkApi) => {
        try {
            // Перевіряємо, чи всі параметри мають значення
            if (page === null || limit === null) {
                throw new Error("Page or limit cannot be null");
            }

            const queryString = new URLSearchParams({
                page,
                limit,
                ...(category && { category }), // Додаємо category лише якщо він не пустий
            }).toString();

            const { data } = await instance.get(`/notices?${queryString}`);
            console.log("Response notices:", data);
            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
);
