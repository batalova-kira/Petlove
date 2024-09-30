import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import {
    AttentionAvatar,
    AttentionText,
    AttentionTitle,
    LoginBtn,
    RegisterBtn,
    stylesAttention,
    WrapperAttentionAvatar,
    WrapperAttentionBtns,
} from "./AttentionModal.styled";
import dog_avatar_x1 from "/images/🐶avatar_dog.png";
import dog_avatar_x2 from "/images/🐶avatar_dog_x2.png";

export const AttentionModal = ({ isOpen, modalId }) => {
    return (
        <>
            <ModalWrapper
                navigateTo="/notices"
                isOpen={isOpen}
                $styles={stylesAttention}
                modalId={modalId}
            >
                <>
                    <WrapperAttentionAvatar>
                        <AttentionAvatar
                            $avatarSrc={dog_avatar_x1}
                            $avatarSrc2x={dog_avatar_x2}
                            alt="Hero Avatar"
                        />
                    </WrapperAttentionAvatar>
                    <AttentionTitle>Attention</AttentionTitle>
                    <AttentionText>
                    We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features.
                    </AttentionText>
                    <WrapperAttentionBtns>
                                <LoginBtn
                                    to="/login"
                                    // $isHomePage={$isHomePage}
                                >
                                    Log in
                                </LoginBtn>
                                <RegisterBtn
                                    to="/registration"
                                    // $isHomePage={$isHomePage}
                                >
                                    Registration
                                </RegisterBtn>
                            </WrapperAttentionBtns>
                </>
            </ModalWrapper>
        </>
    );
};
