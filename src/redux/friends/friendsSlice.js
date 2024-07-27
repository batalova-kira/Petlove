import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchFriends } from "./friends-operations";

const initialState = {
    isLoading: false,
    error: null,
    friends: [],
};

const friendsSlice = createSlice({
    name: "friends",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(fetchFriends.fulfilled, (state, { payload }) => {
                state.isLoading = false;

                state.friends = payload;
            })
            .addMatcher(isAnyOf(fetchFriends.pending), (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addMatcher(
                isAnyOf(fetchFriends.rejected),
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = payload;
                }
            ),
});

export const friendsReducer = friendsSlice.reducer;
