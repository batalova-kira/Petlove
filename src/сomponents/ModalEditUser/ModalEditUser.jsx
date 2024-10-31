import React, { useEffect, useState } from "react";
import { stylesAttention } from "../AttentionModal/AttentionModal.styled";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/auth-selectors";
import {
    currentUser,
    updateUserAvatar,
} from "../../redux/auth/auth-operations";
import Icon from "../Icon/Icon";
import {
    BtnUploadPhoto,
    BtnUploadPhotoTitle,
    InputUrlPhoto,
    stylesEditUser,
    UserModalAvatar,
    UserModalContainer,
    UserModalTitle,
    WrapperUploadPhotoSvg,
    WrapperUserLoadPhoto,
    WrapperUserModalAvatar,
} from "./ModalEditUser.styled";

export const ModalEditUser = ({ isOpen, modalId }) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUserData);

    const [inputValue, setInputValue] = useState("");

    const handleUpdateAvatar = () => {
        dispatch(updateUserAvatar(inputValue));
    };

    useEffect(() => {
        dispatch(currentUser()); // Виконуємо запит при завантаженні компонента
    }, [dispatch]);

    return (
        <ModalWrapper
            navigateTo="/profile"
            isOpen={isOpen}
            $styles={stylesEditUser}
            modalId={modalId}
        >
            <UserModalContainer>
                <UserModalTitle>Edit information</UserModalTitle>
                {user.avatar ? (
                    <UserModalAvatar>
                        <img src={user.avatar} alt="User Avatar" />
                    </UserModalAvatar>
                ) : (
                    <WrapperUserModalAvatar>
                        <Icon name="user-avatar-profile" />
                    </WrapperUserModalAvatar>
                )}
                <WrapperUserLoadPhoto>
                    <InputUrlPhoto
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Введіть URL аватара"
                    />
                    <BtnUploadPhoto onClick={handleUpdateAvatar}>
                        <BtnUploadPhotoTitle>Upload photo</BtnUploadPhotoTitle>
                        <WrapperUploadPhotoSvg>
                            <Icon name="loading" />
                        </WrapperUploadPhotoSvg>
                    </BtnUploadPhoto>
                </WrapperUserLoadPhoto>
            </UserModalContainer>
        </ModalWrapper>
    );
};
