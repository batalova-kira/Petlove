import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginThunk } from "./auth-operations";

const initialState = {
    isLoading: false,
    error: null,
    authenticated: false,
    token: null,
    userData: null,
};

const authSlice = createSlice({
    // Ім'я слайсу
    name: "auth",
    // Початковий стан редюсера слайсу
    initialState,
    // Об'єкт редюсерів
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.authenticated = true;
                state.token = payload.token;
                state.userData = payload.user;
            })
            .addMatcher(isAnyOf(loginThunk.pending), (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addMatcher(isAnyOf(loginThunk.rejected), (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            }),
});

export const authReducer = authSlice.reducer;
