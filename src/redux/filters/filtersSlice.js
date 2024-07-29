import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./filters-operations";

const initialState = {
    categories: [],
    selectedCategory: "",
    isLoading: false,
    error: null,
    // category: "",
    // gender: "",
    // searchQuery: "",
    // species: "",
    // isLoading: false,
    // error: null,
    // categories: [],
    // genders: [],
    // species: [],
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategory: (state, { payload }) => {
            state.selectedCategory = payload;
        },
        // setGender: (state, action) => {
        //     state.gender = action.payload;
        // },
        // setSearchQuery: (state, action) => {
        //     state.searchQuery = action.payload;
        // },
        // setSpecies: (state, action) => {
        //     state.species = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.categories = payload;
                console.log("Categories loaded:", payload);
            })
            // .addCase(fetchGenders.fulfilled, (state, action) => {
            //     state.genders = action.payload;
            // })
            // .addCase(fetchSpecies.fulfilled, (state, action) => {
            //     state.species = action.payload;
            // })
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state) => {
                    state.isLoading = true;
                    state.error = null;
                }
            )
            // .addMatcher(
            //     (action) => action.type.endsWith("/fulfilled"),
            //     (state) => {
            //         state.isLoading = false;
            //     }
            // )
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.error.message;
                }
            );
    },
});

export const { setCategory, setGender, setSearchQuery, setSpecies } =
    filterSlice.actions;
export const filterReducer = filterSlice.reducer;
