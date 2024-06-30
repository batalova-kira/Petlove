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
                console.log("Payload:", payload);
                const { results } = payload;
                if (Array.isArray(results)) {
                    state.news = [...state.news, ...results];
                    state.hasMore = results.length > 0;
                } else {
                    state.hasMore = false;
                }
                state.currentPage += 1;
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

export const newsReducer = newsSlice.reducer;
