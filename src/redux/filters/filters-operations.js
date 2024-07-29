import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://petlove.b.goit.study/api/",
});

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

export const fetchGenders = createAsyncThunk(
    "filters/fetchGenders",
    async (_, thunkApi) => {
        try {
            const { data } = await instance.get(`/notices/sex`);
            console.log("Response Genders:", data);
            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
);

export const fetchSpecies = createAsyncThunk(
    "filters/fetchSpecies",
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
