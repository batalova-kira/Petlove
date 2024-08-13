import styled from "styled-components";
import { FormInput } from "../LoginForm/LoginForm.styled";
import { breakpoints } from "../../constants/breakpoints.js";

export const WrapperFilter = styled.form`
    position: relative;

    display: flex;
    align-items: center;

    margin-bottom: ${({ $isNoticesPage }) =>
        $isNoticesPage ? "14px" : "24px"};
    width: 100%;

    @media only screen and (min-width: ${breakpoints.medium}) {
        width: 230px;
        margin-bottom: 0;
    }
`;

export const InputFilter = styled(FormInput)`
    background: ${({ $isNoticesPage, theme }) =>
        $isNoticesPage ? theme.colors.secondBackground : "transparent"};

    @media only screen and (min-width: ${breakpoints.medium}) {
        padding: 14px;
    }
`;

export const BtnLoupe = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;

    background-color: transparent;

    @media only screen and (min-width: ${breakpoints.medium}) {
        position: absolute;
        top: 15px;
        right: 14px;
    }
`;
