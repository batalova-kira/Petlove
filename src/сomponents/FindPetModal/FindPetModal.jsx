import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
    stylesFindPet,
    WrapperBtnsPetFind,
    WrapperFindPetImg,
    WrapperPetInfo,
    WrapperRating,
} from "./FindPetModal.styled";
import { RatingStars } from "../RaitingStars/RaitingStars";
import Icon from "../Icon/Icon";
import { fetchNoticeById } from "../../redux/notices/notices-operations";
import { selectModalData } from "../../redux/modal/modal.selectors";


export const FindPetModal = ({ isOpen, modalId }) => {
    const dispatch = useDispatch();
    const modalData = useSelector(selectModalData);
    // Якщо модалка відкрита, отримуємо дані
    useEffect(() => {
        if (isOpen) {
            dispatch(fetchNoticeById(modalId));
        }
    }, [dispatch, isOpen, modalId]);

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
        user
    } = modalData || {}; // Запобігає помилкам, якщо modalData ще не завантажено

    if (!modalData) {
        return null; // Можливо, варто показати лоадер, якщо дані ще не завантажено
    }

    const formBirthday = birthday ? birthday.replace(/-/g, ".") : "";

    return (
        <ModalWrapper
            navigateTo="/notices"
            isOpen={isOpen}
            $styles={stylesFindPet}
            modalId={modalId}
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
                    <>
                        <Icon name="favorite-heart" width={18} height={18} />
                    </>
                </BtnAddTo>
                <BtnContact href={`tel:${user.phone}`}>Contact</BtnContact>
            </WrapperBtnsPetFind>
        </ModalWrapper>
    );
};
