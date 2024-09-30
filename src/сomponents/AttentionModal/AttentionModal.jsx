import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import { stylesAttention } from "./AttentionModal.styled";

export const AttentionModal = ({ isOpen, modalId }) => {
    return (
        <>
            <ModalWrapper
                navigateTo="/notices"
                isOpen={isOpen}
                $styles={stylesAttention}
                modalId={modalId}
            >
                <p>Attention</p>
            </ModalWrapper>
        </>
    );
};
