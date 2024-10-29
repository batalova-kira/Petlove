import React, { useEffect } from "react";
import { stylesAttention } from "../AttentionModal/AttentionModal.styled";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/auth-selectors";
import { currentUser } from "../../redux/auth/auth-operations";
import Icon from "../Icon/Icon";
import { WrapperUserModalAvatar } from "./ModalEditUser.styled";

export const ModalEditUser = ({ isOpen, modalId }) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUserData);

    useEffect(() => {
        dispatch(currentUser()); // Виконуємо запит при завантаженні компонента
    }, [dispatch]);

    return (
        <ModalWrapper
            navigateTo="/profile"
            isOpen={isOpen}
            $styles={stylesAttention}
            modalId={modalId}
        >
            <h2>Edit information</h2>
            {user.avatar ? (
                <img src={user.avatar} alt="User Avatar" />
            ) : (
                <WrapperUserModalAvatar>
                    <Icon name="user-avatar-profile" />
                </WrapperUserModalAvatar>
            )}
        </ModalWrapper>
    );
};
