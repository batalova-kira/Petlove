import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchNotices } from "./notices-operations";

const initialState = {
    isLoading: false,
    error: null,
    notices: [],
    allNotices: [],
    currentPage: 1,
    hasMore: true,
    totalPages: 0,
    filterWord: "",
};

const noticesSlice = createSlice({
    name: "notices",
    initialState,
    reducers: {
        resetNotices: (state) => {
            state.notices = [];
            state.allNotices = [];
            state.currentPage = 1;
            state.hasMore = true;
            state.totalPages = 0;
            state.filterWord = "";
        },
        setAllNotices: (state, { payload }) => {
            state.allNotices = payload;
            state.notices = payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchNotices.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.notices = payload.results;
                state.hasMore = payload.page < payload.totalPages;
                state.currentPage = payload.page;
                state.totalPages = payload.totalPages;
            })
            .addMatcher(isAnyOf(fetchNotices.pending), (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addMatcher(
                isAnyOf(fetchNotices.rejected),
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = payload;
                }
            ),
});

export const { resetNotices, setAllNotices } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
