import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./auth-operations";

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
                state.userData = {
                    email: payload.email,
                    name: payload.name,
                };
            })
            .addCase(registerThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.authenticated = true;
                state.token = payload.token;
                state.userData = {
                    email: payload.email,
                    name: payload.name,
                };
            })
            .addMatcher(
                isAnyOf(loginThunk.pending, registerThunk.pending),
                (state) => {
                    state.isLoading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                isAnyOf(loginThunk.rejected, registerThunk.rejected),
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = payload;
                }
            ),
});

export const authReducer = authSlice.reducer;
