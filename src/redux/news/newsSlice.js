import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchNews } from "./news-operations";

const initialState = {
    isLoading: false,
    error: null,
    setAllNews: [],
    filteredNews: [],
    currentPage: 1,
    hasMore: true,
    totalPages: 0,
    filterWord: "",
};

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        resetNews: (state) => {
            state.news = [];
            state.filteredNews = [];
            state.currentPage = 1;
            state.hasMore = true;
            state.totalPages = 0;
            state.filterWord = "";
        },
        setFilterWord: (state, { payload }) => {
            state.filterWord = payload;
        },
        setFilteredNews: (state, { payload }) => {
            state.filteredNews = payload;
            state.totalPages = Math.ceil(payload.length / state.limit);
        },
        setCurrentPage: (state, { payload }) => {
            state.currentPage = payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchNews.fulfilled, (state, { payload }) => {
                state.allNews = payload.results;
                state.filteredNews = payload.results;
                state.totalPages = payload.totalPages;
                state.isLoading = false;
                state.error = null;
            })
            .addMatcher(isAnyOf(fetchNews.pending), (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addMatcher(isAnyOf(fetchNews.rejected), (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            }),
});

export const { setFilterWord, setFilteredNews, setCurrentPage, resetNews } =
    newsSlice.actions;
export const newsReducer = newsSlice.reducer;
