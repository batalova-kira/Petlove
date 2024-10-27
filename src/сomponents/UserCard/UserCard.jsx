import React, { useEffect } from "react";
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
    WrapperUserBtn,
} from "./UserCard.styled";
import Icon from "../Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../redux/auth/auth-operations";
import { selectUserData } from "../../redux/auth/auth-selectors";

export const UserCard = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUserData);

    useEffect(() => {
        dispatch(currentUser()); // Виконуємо запит при завантаженні компонента
    }, [dispatch]);

    const handleEditClick = () => {
        console.log("User Data:", user);
        // Логіка для відкриття модального вікна редагування
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
                <WrapperEditUserBtn>
                    <Icon height={18} width={18} name="edit-card" />
                </WrapperEditUserBtn>
            </ContainerUserCardHeader>
            <WrapperUserBlock>
                {user.avatar ? (
                    <img src={user.avatar} alt="User Avatar" />
                ) : (
                    <WrapperUserBlockAvatar>
                        <Icon name="user-avatar-profile" />
                    </WrapperUserBlockAvatar>
                )}
                {user.avatar ? (
                    "none"
                ) : (
                    <UserBtnUploadPhoto onClick={handleEditClick}>
                        Upload photo
                    </UserBtnUploadPhoto>
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
                <PetsAddBtn>
                    Add pet <Icon name="plus" height={18} width={18} />
                </PetsAddBtn>
            </UserPetsInformationBlock>
            <UserInformationLogout>Log out</UserInformationLogout>
        </ContainerUserCard>
    );
};
