import React from "react";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import {
    BtnAddTo,
    BtnContact,
    ContainerPetInfo,
    FindPetCategory,
    FindPetImg,
    FindPetTitle,
    PetInfoText,
    PetInfoTitle,
    PetInfoTitleDesc,
    RatingNumber,
    WrapperBtnsPetFind,
    WrapperFindPetImg,
    WrapperPetInfo,
    WrapperRating,
} from "./FindPetModal.styled";
import { RatingStars } from "../RaitingStars/RaitingStars";
import { Star } from "../NoticesCard/NoticesCard.styled";
import Icon from "../Icon/Icon";

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
            <WrapperBtnsPetFind>
                <BtnAddTo>
                    Add to
                    <Star>
                        <Icon name="favorite-heart" width={18} height={18} />
                    </Star>
                </BtnAddTo>
                <BtnContact>Contact</BtnContact>
            </WrapperBtnsPetFind>
        </ModalWrapper>
    );
};
