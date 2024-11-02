import React, { useEffect } from "react";

import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/auth-selectors";
import {
    currentUser,
    updateAvatar,
    updateUser,
} from "../../redux/auth/auth-operations";
import Icon from "../Icon/Icon";
import {
    BtnSave,
    BtnUploadPhoto,
    BtnUploadPhotoTitle,
    InputUrlPhoto,
    stylesEditUser,
    UserInput,
    UserModalAvatar,
    UserModalContainer,
    UserModalTitle,
    WrapperUploadPhotoSvg,
    WrapperUserInputs,
    WrapperUserLoadPhoto,
} from "./ModalEditUser.styled";
import { useForm } from "react-hook-form";
import { validationEditProfileSchema } from "../../constants/schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export const ModalEditUser = ({ isOpen, modalId, onClose }) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUserData);
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationEditProfileSchema),
        defaultValues: {
            avatar: user.avatar || "",
            name: user.name || "",
            email: user.email || "",
            phone: user.phone || "",
        },
    });

    // Функція для оновлення аватара
    const handleUpdateAvatar = async () => {
        const avatarUrl = getValues("avatar");
        if (avatarUrl) {
            try {
                await dispatch(updateAvatar(avatarUrl)).unwrap();
                await dispatch(currentUser());
                console.log("Avatar updated successfully!");
            } catch (error) {
                console.error("Failed to update avatar:", error);
            }
        } else {
            console.log("Please enter a valid avatar URL");
        }
    };

    // Функція для оновлення даних користувача
    const onSubmit = async (data) => {
        try {
            await dispatch(updateUser(data)).unwrap();
            await dispatch(currentUser());
            onClose();
        } catch (error) {
            console.error("Failed to update user:", error);
        }
    };

    useEffect(() => {
        dispatch(currentUser());
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
                {/* Аватар */}
                <UserModalAvatar>
                    {user.avatar ? (
                        <img src={user.avatar} alt="User Avatar" />
                    ) : (
                        <Icon name="user-avatar-profile" />
                    )}
                </UserModalAvatar>
                {/* Форма для редагування даних */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <WrapperUserLoadPhoto>
                        <InputUrlPhoto
                            type="text"
                            {...register("avatar")}
                            placeholder="Enter avatar URL"
                        />
                        {errors.avatar && <p>{errors.avatar.message}</p>}
                        <BtnUploadPhoto
                            onClick={handleUpdateAvatar}
                            type="button"
                        >
                            <BtnUploadPhotoTitle>
                                Upload photo
                            </BtnUploadPhotoTitle>
                            <WrapperUploadPhotoSvg>
                                <Icon name="loading" />
                            </WrapperUploadPhotoSvg>
                        </BtnUploadPhoto>
                    </WrapperUserLoadPhoto>
                    <WrapperUserInputs>
                        <UserInput
                            type="text"
                            {...register("name")}
                            placeholder="Enter name"
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                        <UserInput
                            type="email"
                            {...register("email")}
                            placeholder="Enter email"
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                        <UserInput
                            type="tel"
                            {...register("phone")}
                            placeholder="Enter phone number"
                        />
                        {errors.phone && <p>{errors.phone.message}</p>}
                    </WrapperUserInputs>
                    <BtnSave type="submit">Save</BtnSave>
                </form>
            </UserModalContainer>
        </ModalWrapper>
    );
};
