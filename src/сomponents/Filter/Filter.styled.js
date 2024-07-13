import styled from "styled-components";
import { FormInput } from "../LoginForm/LoginForm.styled";

export const WrapperFilter = styled.form`
    position: relative;

    margin-bottom: 24px;
    width: 100%;

    @media only screen and (min-width: 1280px) {
        margin-bottom: 24px;
    }
`;

export const InputFilter = styled(FormInput)`
    background-color: transparent;

    /* @media only screen and (min-width: 1280px) {
        margin-bottom: 24px;
    } */
`;

export const BtnLoupe = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;

    background-color: transparent;

    /* @media only screen and (min-width: 1280px) {
        margin-bottom: 24px;
    } */
`;
