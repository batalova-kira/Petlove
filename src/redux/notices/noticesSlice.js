import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
    fetchCategories,
    fetchGender,
    fetchNotices,
    fetchSpecies,
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
    species: [],
    selectedSpecies: "",
    locationId: "",
    uniqueLocations: [],
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
            state.species = [];
            state.categories = [];
            state.locationId = "";
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
        },
        setSpecies: (state, { payload }) => {
            state.selectedSpecies = payload;
        },
        setLocation(state, { payload }) {
            state.locationId = payload;
        },
        setFilterWord: (state, { payload }) => {
            state.filterWord = payload;
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
                // Збір унікальних локацій
                const uniqueLocations = payload.results
                    .map((item) => item.location)
                    .filter(
                        (value, index, self) => self.indexOf(value) === index
                    );

                state.uniqueLocations = uniqueLocations;
            })
            .addCase(fetchCategories.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.categories = payload;
            })
            .addCase(fetchGender.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.gender = payload;
            })
            .addCase(fetchSpecies.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.species = payload;
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
    setSpecies,
    setGender,
    setLocation,
} = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
