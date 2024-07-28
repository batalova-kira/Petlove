import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://petlove.b.goit.study/api/",
});

export const fetchNotices = createAsyncThunk(
    "notices/fetchNotices",
    async ({ page, limit }, thunkApi) => {
        try {
            const { data } = await instance.get(
                `/notices?page=${page}&limit=${limit}`
            );
            console.log("Response notices:", data);
            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
);
