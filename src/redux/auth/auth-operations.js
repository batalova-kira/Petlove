import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://petlove.b.goit.study/api-docs/",
});

const setToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const loginThunk = createAsyncThunk(
    "auth/login",
    async (formData, thunkApi) => {
        try {
            const { data } = await instance.post("/users/signin", formData);
            setToken(data.token);

            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
);
