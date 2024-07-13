import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchNews } from "./news-operations";

const initialState = {
    isLoading: false,
    error: null,
    news: [],
    allNews: [],
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
            state.allNews = [];
            state.currentPage = 1;
            state.hasMore = true;
            state.totalPages = 0;
            state.filterWord = "";
        },
        setFilterWord: (state, { payload }) => {
            state.filterWord = payload;
            if (payload) {
                state.news = state.allNews.filter(
                    (newsItem) =>
                        (newsItem.title &&
                            newsItem.title
                                .toLowerCase()
                                .includes(payload.toLowerCase())) ||
                        (newsItem.content &&
                            newsItem.content
                                .toLowerCase()
                                .includes(payload.toLowerCase()))
                );
            } else {
                state.news = state.allNews;
            }
        },
        setAllNews: (state, action) => {
            state.allNews = action.payload;
            state.news = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchNews.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                const uniqueNews = payload.results.filter(
                    (item) =>
                        !state.allNews.some(
                            (existingItem) => existingItem._id === item._id
                        )
                );
                state.allNews = [...state.allNews, ...uniqueNews];
                state.news = state.filterWord
                    ? state.allNews.filter(
                          (newsItem) =>
                              (newsItem.title &&
                                  newsItem.title
                                      .toLowerCase()
                                      .includes(
                                          state.filterWord.toLowerCase()
                                      )) ||
                              (newsItem.content &&
                                  newsItem.content
                                      .toLowerCase()
                                      .includes(state.filterWord.toLowerCase()))
                      )
                    : state.allNews;
                state.hasMore = payload.page < payload.totalPages;
                state.currentPage = payload.page;
                state.totalPages = payload.totalPages;
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

export const { resetNews, setFilterWord, setAllNews } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
