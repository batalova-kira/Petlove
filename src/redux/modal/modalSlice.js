import { createSlice } from "@reduxjs/toolkit";
import { fetchNoticeById } from "../notices/notices-operations";

const initialState = {
    isOpenModal: false,
    modalData: null,
    modals: {}
};


const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal(state, action) {
            const modalId = action.payload;
            state.modals[modalId] = true; // Відкрити конкретну модалку
        },
        closeModal(state, action) {
            const modalId = action.payload;
            state.modals[modalId] = false; // Закрити конкретну модалку
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
