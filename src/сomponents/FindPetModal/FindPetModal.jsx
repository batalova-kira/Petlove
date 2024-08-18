import React from "react";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";

export const FindPetModal = ({ isOpen, onClose, modalData }) => {
    const { name } = modalData;
    return (
        <ModalWrapper navigateTo="/notices" isOpen={isOpen}>
            <div>{name}</div>
        </ModalWrapper>
    );
};
