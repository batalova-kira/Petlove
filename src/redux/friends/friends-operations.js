import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://petlove.b.goit.study/api/",
});

export const fetchFriends = createAsyncThunk(
    "friends/fetchFriends",
    async (_, thunkApi) => {
        try {
            const { data } = await instance.get(`/friends/`);
            console.log("Response data:", data);
            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
);
