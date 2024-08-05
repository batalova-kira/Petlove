import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://petlove.b.goit.study/api/",
});

export const fetchNotices = createAsyncThunk(
    "notices/fetchNotices",
    async ({ page, limit, category, keyword, sex }, thunkApi) => {
        try {
            if (page === null || limit === null) {
                throw new Error("Page or limit cannot be null");
            }

            const queryParams = {
                page,
                limit,
                category: category || "",
                sex: sex || "",
                keyword: keyword || "",
            };

            // Логування параметрів запиту
            console.log("Query Parameters:", queryParams);

            const queryString = new URLSearchParams(queryParams).toString();
            console.log("Query String:", queryString); // Логування рядка запиту

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
