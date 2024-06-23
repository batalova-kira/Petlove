import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://petlove.b.goit.study/api/",
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

export const registerThunk = createAsyncThunk(
    "auth/register",
    async (formData, thunkApi) => {
        try {
            const { data } = await instance.post("/users/signup", formData);
            setToken(data.token);
            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
);

export const refreshThunk = createAsyncThunk(
    "auth/refresh",
    async (_, thunkApi) => {
        try {
            const state = thunkApi.getState();
            const token = state.auth.token;
            setToken(token);
            const { data } = await instance.get("/users/current");

            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    },
    {
        condition: (_, thunkApi) => {
            const state = thunkApi.getState();
            const token = state.auth.token;
            if (!token) return false;
            return true;
        },
    }
);

export const logoutThunk = createAsyncThunk(
    "auth/logout",
    async (_, thunkApi) => {
        try {
            const { data } = await instance.post("/users/signout");
            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
);
