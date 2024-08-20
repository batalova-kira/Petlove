import React from "react";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import {
    ContainerPetInfo,
    FindPetCategory,
    FindPetImg,
    FindPetTitle,
    PetInfoText,
    PetInfoTitle,
    PetInfoTitleDesc,
    RatingNumber,
    WrapperFindPetImg,
    WrapperPetInfo,
    WrapperRating,
} from "./FindPetModal.styled";
import { RatingStars } from "../RaitingStars/RaitingStars";

export const FindPetModal = ({ isOpen, modalData }) => {
    const {
        imgURL,
        category,
        title,
        popularity,
        name,
        birthday,
        sex,
        species,
        comment,
    } = modalData;

    const formBirthday = birthday ? birthday.replace(/-/g, ".") : "";
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
            <WrapperRating>
                <RatingStars popularity={popularity} />
                <RatingNumber>{popularity}</RatingNumber>
            </WrapperRating>
            <ContainerPetInfo>
                <WrapperPetInfo>
                    <PetInfoTitle>Name</PetInfoTitle>
                    <PetInfoTitleDesc>{name}</PetInfoTitleDesc>
                </WrapperPetInfo>
                <WrapperPetInfo>
                    <PetInfoTitle>Birthday</PetInfoTitle>
                    <PetInfoTitleDesc>{formBirthday}</PetInfoTitleDesc>
                </WrapperPetInfo>
                <WrapperPetInfo>
                    <PetInfoTitle>Sex</PetInfoTitle>
                    <PetInfoTitleDesc>{sex}</PetInfoTitleDesc>
                </WrapperPetInfo>
                <WrapperPetInfo>
                    <PetInfoTitle>Species</PetInfoTitle>
                    <PetInfoTitleDesc>{species}</PetInfoTitleDesc>
                </WrapperPetInfo>
            </ContainerPetInfo>
            <PetInfoText>{comment}</PetInfoText>
            <div>
                <button></button>
                <button></button>
            </div>
        </ModalWrapper>
    );
};
