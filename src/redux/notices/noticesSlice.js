import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
    fetchCategories,
    fetchGender,
    fetchNotices,
} from "./notices-operations";

const initialState = {
    isLoading: false,
    error: null,
    notices: [],
    allNotices: [],
    filterWord: "",
    categories: [],
    selectedCategory: "",
    gender: [],
    selectedGender: "",
    currentPage: 1,
    hasMore: true,
    totalPages: 0,
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
        setCategory: (state, { payload }) => {
            state.selectedCategory = payload;
        },
        setGender: (state, { payload }) => {
            state.selectedGender = payload;
            console.log(state.selectedGender);
        },
        setFilterWord: (state, { payload }) => {
            state.filterWord = payload;
            console.log(state.filterWord);
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
            .addCase(fetchCategories.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.categories = payload;
            })
            .addCase(fetchGender.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.gender = payload;
                console.log("state.gender", state.gender);
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

export const {
    resetNotices,
    setAllNotices,
    setFilterWord,
    setCategory,
    setGender,
} = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
