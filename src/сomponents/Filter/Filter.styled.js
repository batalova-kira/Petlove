import styled from "styled-components";
import { FormInput } from "../LoginForm/LoginForm.styled";

export const WrapperFilter = styled.form`
    position: relative;

    display: flex;
    align-items: center;

    margin-bottom: 24px;
    width: 100%;

    @media only screen and (min-width: 768px) {
        width: 230px;
        margin-bottom: 0;
    }
`;

export const InputFilter = styled(FormInput)`
    background-color: transparent;

    @media only screen and (min-width: 768px) {
        padding: 14px;
    }
`;

export const BtnLoupe = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;

    background-color: transparent;

    @media only screen and (min-width: 768px) {
        position: absolute;
        top: 15px;
        right: 14px;
    }
`;
