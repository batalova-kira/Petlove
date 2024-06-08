import { createSlice } from "@reduxjs/toolkit";
import {} from "./auth-operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => builder,
    // .addCase(register.pending, (state, action) => {})
    // .addCase(register.fulfilled, (state, action) => {
    //     state.user = action.payload.user;
    //     state.token = action.payload.token;
    //     state.isLoggedIn = true;
    // })
    // .addCase(register.rejected, (state, action) => {
    //     state.user = { name: null, email: null };
    //     state.isLoggedIn = false;
    // })
    // .addCase(logIn.pending, (state, action) => {})
    // .addCase(logIn.fulfilled, (state, action) => {
    //     state.user = action.payload.user;
    //     state.token = action.payload.token;
    //     state.isLoggedIn = true;
    // })
    // .addCase(logIn.rejected, (state, action) => {}),
    // .addCase(logOut.fulfilled, (state) => {
    //     state.user = { name: null, email: null };
    //     state.token = null;
    //     state.isLoggedIn = false;
    // })
    // .addCase(refreshUser.pending, (state, action) => {
    //     state.isRefreshing = true;
    // })
    // .addCase(refreshUser.fulfilled, (state, action) => {
    //     state.user = action.payload;
    //     state.isLoggedIn = true;
    //     state.isRefreshing = false;
    // })
    // .addCase(refreshUser.rejected, (state) => {
    //     state.isRefreshing = false;
    // }),
});

export const authReducer = authSlice.reducer;
