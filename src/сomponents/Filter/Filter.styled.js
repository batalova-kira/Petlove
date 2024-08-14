import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints.js";

export const WrapperFilter = styled.form`
    position: relative;

    display: flex;
    align-items: center;

    margin-bottom: ${({ $isNoticesPage }) =>
        $isNoticesPage ? "none" : "24px"};
    width: 100%;

    @media only screen and (min-width: ${breakpoints.medium}) {
        width: ${({ $isNoticesPage }) => ($isNoticesPage ? "265px" : "230px")};
        margin-bottom: 0;
    }
`;

export const InputFilter = styled.input`
    width: 100%;
    padding: 12px;

    border: ${({ $isNoticesPage, theme }) =>
        $isNoticesPage ? "none" : `1px solid ${theme.colors.borderGrey}`};
    border-radius: 30px;

    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;

    color: ${({ $isNoticesPage, theme }) =>
        $isNoticesPage ? theme.colors.black : theme.colors.mediumGrey};
    background: ${({ $isNoticesPage, theme }) =>
        $isNoticesPage ? theme.colors.secondBackground : "transparent"};

    &::placeholder {
        color: ${({ $isNoticesPage, theme }) =>
            $isNoticesPage ? theme.colors.black : theme.colors.lightGrey};
    }

    &:focus {
        border-color: ${(props) => props.theme.colors.yellow};
        outline: none;
    }

    &.error {
        border-color: ${(props) => props.theme.colors.red};
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* padding: 14px; */
        padding: 16px;

        font-size: 16px;
        line-height: 1.25;
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
