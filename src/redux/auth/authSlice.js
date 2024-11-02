import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
    currentUser,
    loginThunk,
    logoutThunk,
    refreshThunk,
    registerThunk,
    updateAvatar,
    updateUser,
} from "./auth-operations";

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
                    ...state.userData,
                    email: payload.email,
                    name: payload.name,
                    avatar: payload.avatar,
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
            .addCase(refreshThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.authenticated = true;
                state.userData = payload;
            })
            .addCase(logoutThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.authenticated = false;
                state.token = null;
                state.userData = null;
            })
            .addCase(currentUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userData = payload;
                state.authenticated = true;
            })
            .addCase(updateUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.data = { ...state.data, ...payload }; // Оновлюємо дані користувача
            })
            .addCase(updateAvatar.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.data.avatar = payload.avatar; // оновлюємо аватар у стані
            })
            .addMatcher(
                isAnyOf(
                    loginThunk.pending,
                    registerThunk.pending,
                    refreshThunk.pending,
                    logoutThunk.pending,
                    currentUser.pending,
                    updateUser.pending,
                    updateAvatar.pending
                ),
                (state) => {
                    state.isLoading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                isAnyOf(
                    loginThunk.rejected,
                    registerThunk.rejected,
                    refreshThunk.rejected,
                    logoutThunk.rejected,
                    currentUser.rejected,
                    updateUser.rejected,
                    updateAvatar.rejected
                ),
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = payload;
                }
            ),
});

export const authReducer = authSlice.reducer;
