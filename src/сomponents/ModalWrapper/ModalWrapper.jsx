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
    $styles,
    modalId,
  }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.code === "Escape") {
          dispatch(closeModal(modalId));
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
    }, [dispatch, isOpen, title, children, modalId]);
  
    const handleOverlayClick = (event) => {
      if (event.target === event.currentTarget) {
        dispatch(closeModal(modalId));
      }
    };
  
    const handleCloseModal = () => {
      dispatch(closeModal(modalId));
      if (navigateTo === "/notices") {
        navigate("/notices");
      } else {
        navigate("/");
      }
    };
  
    return (
      isOpen && (
        <StyledModal
          onClick={handleOverlayClick}
          $styles={$styles}
        >
          <div className="modal">
          <BtnClose onClick={handleCloseModal} />
            {children}
          </div>
        </StyledModal>
      )
    );
  };
