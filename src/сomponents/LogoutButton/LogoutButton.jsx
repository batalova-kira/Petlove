import { useDispatch } from "react-redux";
import { logoutThunk } from "../../redux/auth/auth-operations";
import { StyledLogoutButton } from "./LogoutButton.styled";

export const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutThunk());
    };

    return (
        <StyledLogoutButton onClick={handleLogout}>Log out</StyledLogoutButton>
    );
};
