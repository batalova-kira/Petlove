import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://petlove.b.goit.study/api/",
});

export const fetchNotices = createAsyncThunk(
    "notices/fetchNotices",
    async ({ page, limit, category, keyword, sex }, thunkApi) => {
        try {
            // Перевіряємо, чи всі параметри мають значення
            if (page === null || limit === null) {
                throw new Error("Page or limit cannot be null");
            }
            const queryString = new URLSearchParams({
                page,
                limit,
                category: category || "",
                sex: sex || "",
                keyword: keyword || "",
            }).toString();

            const { data } = await instance.get(`/notices?${queryString}`);
            console.log("Response from API:", data);

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

export const fetchGender = createAsyncThunk(
    "filters/fetchGender",
    async (_, thunkApi) => {
        try {
            const { data } = await instance.get(`/notices/sex`);
            console.log("Response Gender:", data);
            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
);
