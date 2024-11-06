import React, { useEffect, useState } from "react";
import {
    ContainerUserCard,
    ContainerUserCardHeader,
    PetsAddBtn,
    TextIconUserCard,
    UserBtnUploadPhoto,
    UserInformationBlock,
    UserInformationInput,
    UserInformationLogout,
    UserInformationTitle,
    UserPetsInformationBlock,
    UserPetsInformationTitle,
    WrapperEditUserBtn,
    WrapperIconUserCard,
    WrapperUserBlock,
    WrapperUserBlockAvatar,
    WrapperUserBlockImg,
    WrapperUserBtn,
} from "./UserCard.styled";
import Icon from "../Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../redux/auth/auth-operations";
import { selectUserData } from "../../redux/auth/auth-selectors";
import { closeModal, openModal } from "../../redux/modal/modalSlice";
import { selectIsModalOpen } from "../../redux/modal/modal.selectors";
import { ModalEditUser } from "../ModalEditUser/ModalEditUser";

export const UserCard = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUserData);
    const isModalOpen = useSelector((state) =>
        selectIsModalOpen(state, "editUserModal")
    );

    useEffect(() => {
        dispatch(currentUser()); 
    }, [dispatch]);

    const handleEditClick = () => {
        console.log("User Data:", user);
        dispatch(openModal("editUserModal"));
    };

    // Функція для перевірки дійсності URL аватарки
    const isValidAvatarUrl = (url) => {
        return url && (url.startsWith("http://") || url.startsWith("https://"));
    };

    const handleCloseModal = (_id) => {
        dispatch(closeModal(_id)); 
    };

    return (
        <ContainerUserCard>
            <ContainerUserCardHeader>
                <WrapperUserBtn>
                    <TextIconUserCard>User</TextIconUserCard>
                    <WrapperIconUserCard>
                        <Icon height={18} width={18} name="user-card" />
                    </WrapperIconUserCard>
                </WrapperUserBtn>
                <WrapperEditUserBtn onClick={() => handleEditClick()}>
                    <Icon height={18} width={18} name="edit-card" />
                </WrapperEditUserBtn>
            </ContainerUserCardHeader>
            <WrapperUserBlock>
                {isValidAvatarUrl(user.avatar) ? (
                    <WrapperUserBlockImg>
                        <img src={user.avatar} alt="User Avatar" />
                    </WrapperUserBlockImg>
                ) : (
                    <>
                        <WrapperUserBlockAvatar>
                            <Icon name="user-avatar-profile" />
                        </WrapperUserBlockAvatar>
                        <UserBtnUploadPhoto onClick={handleEditClick}>
                            Upload photo
                        </UserBtnUploadPhoto>
                    </>
                )}
            </WrapperUserBlock>
            <div>
                <UserInformationTitle>My information</UserInformationTitle>
                <UserInformationBlock>
                    <UserInformationInput
                        value={` ${user.name || "Name"}`}
                        readOnly
                    />
                    <UserInformationInput
                        value={`${user.email || "name@gmail.com"}`}
                        readOnly
                    />
                    <UserInformationInput
                        value={` ${user.phone || "+380"}`}
                        readOnly
                    />
                </UserInformationBlock>
            </div>
            <UserPetsInformationBlock>
                <UserPetsInformationTitle>My pets</UserPetsInformationTitle>
                <PetsAddBtn to="/add-pet">
                    Add pet <Icon name="plus" height={18} width={18} />
                </PetsAddBtn>
            </UserPetsInformationBlock>
            <UserInformationLogout>Log out</UserInformationLogout>
            {isModalOpen && (
                <ModalEditUser
                    isOpen={isModalOpen}
                    modalId="editUserModal"
                    onClose={() => handleCloseModal("editUserModal")}
                />
            )}
        </ContainerUserCard>
    );
};
