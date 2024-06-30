import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchNews } from "./news-operations";

const initialState = {
    isLoading: false,
    error: null,
    news: [],
    currentPage: 1,
    hasMore: true,
};

const newsSlice = createSlice({
    // Ім'я слайсу
    name: "news",
    // Початковий стан редюсера слайсу
    initialState,
    // Об'єкт редюсерів
    reducers: {
        resetNews: (state) => {
            state.news = [];
            state.currentPage = 1;
            state.hasMore = true;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchNews.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                const uniqueNews = payload.results.filter(
                    (item) =>
                        !state.news.some(
                            (existingItem) => existingItem._id === item._id
                        )
                );
                state.news = [...state.news, ...uniqueNews];
                state.hasMore = payload.page < payload.totalPages;
                state.currentPage = payload.page;
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

export const { resetNews } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
