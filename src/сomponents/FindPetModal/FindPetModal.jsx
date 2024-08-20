import React from "react";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import {
    FindPetCategory,
    FindPetImg,
    FindPetTitle,
    WrapperFindPetImg,
} from "./FindPetModal.styled";
import { RatingStars } from "../RaitingStars/RaitingStars";

export const FindPetModal = ({ isOpen, modalData }) => {
    const { imgURL, category, title, popularity } = modalData;
    return (
        <ModalWrapper
            navigateTo="/notices"
            isOpen={isOpen}
            // modalWidth="600px"
            // modalPadding="70px 78px"
            // mediumModalWidth="90%"
            // mediumModalPadding="20px 10px"
        >
            <WrapperFindPetImg>
                <FindPetImg src={imgURL} alt={title} />
            </WrapperFindPetImg>
            <FindPetCategory>{category}</FindPetCategory>
            <FindPetTitle>{title}</FindPetTitle>
            <div>
                <RatingStars popularity={popularity} />
                <p>{popularity}</p>
            </div>
        </ModalWrapper>
    );
};
