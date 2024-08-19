import React from "react";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";

export const FindPetModal = ({ isOpen, modalData }) => {
    const { name } = modalData;
    return (
        <ModalWrapper
            navigateTo="/notices"
            isOpen={isOpen}
            // modalWidth="600px"
            // modalPadding="70px 78px"
            // mediumModalWidth="90%"
            // mediumModalPadding="20px 10px"
        >
            <div>{name}</div>
        </ModalWrapper>
    );
};
