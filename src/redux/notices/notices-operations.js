import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://petlove.b.goit.study/api/",
});

export const fetchNotices = createAsyncThunk(
    "notices/fetchNotices",
    async (
        { page, limit, category, keyword, sex, species, locationId },
        thunkApi
    ) => {
        try {
            if (page === null || limit === null) {
                throw new Error("Page or limit cannot be null");
            }

            const queryParams = {
                page,
                limit,
                category: category || "",
                sex: sex || "",
                species: species || "",
                locationId: locationId || "",
                keyword: keyword || "",
            };
            const queryString = new URLSearchParams(queryParams).toString();

            const { data } = await instance.get(`/notices?${queryString}`);
            console.log("Response from API:", data);
            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
);

export const fetchCategories = createAsyncThunk(
    "notices/fetchCategories",
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
    "notices/fetchGender",
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

export const fetchSpecies = createAsyncThunk(
    "notices/fetchSpecies",
    async (_, thunkApi) => {
        try {
            const { data } = await instance.get(`/notices/species`);
            console.log("Response Species:", data);
            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
);
