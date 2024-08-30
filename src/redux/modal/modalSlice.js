import { createSlice } from "@reduxjs/toolkit";
import { fetchNoticeById } from "../notices/notices-operations";

const initialState = {
    isOpenModal: false,
    modalData: null,
};


const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
         openModal(state, action) {
         state.isOpenModal = true;
             state.modalData = action.payload;
         },
        closeModal(state) {
            state.isOpenModal = false;
            state.modalData = null;
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchNoticeById.fulfilled, (state, action) => {
                    state.modalData = action.payload;
                });
        },
    },
});

export const {  closeModal, openModal } = modalSlice.actions;
// Редюсер слайсу
export const modalReducer = modalSlice.reducer;
