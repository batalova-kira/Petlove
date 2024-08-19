import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modal/modalSlice";
import { BtnClose, StyledModal } from "./ModalWrapper.styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ModalWrapper = ({
    title,
    isOpen,
    children,
    navigateTo,
    modalWidth,
    modalPadding,
    mediumModalWidth,
    mediumModalPadding,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === "Escape") {
                dispatch(closeModal());
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [dispatch, isOpen, title, children]);

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            dispatch(closeModal());
        }
    };

    const handleCloseModal = () => {
        dispatch(closeModal());
        if (navigateTo === "/notices") {
            navigate("/notices");
        } else {
            navigate("/");
        } // Перенаправлення на сторінку "/"
    };

    return (
        isOpen && (
            <StyledModal
                onClick={handleOverlayClick}
                modalWidth={modalWidth}
                modalPadding={modalPadding}
                mediumModalWidth={mediumModalWidth}
                mediumModalPadding={mediumModalPadding}
            >
                <div className="modal">
                    <BtnClose onClick={handleCloseModal} />
                    {children}
                </div>
            </StyledModal>
        )
    );
};
