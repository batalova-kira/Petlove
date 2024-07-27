import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { breakpoints } from "../../constants/breakpoints.js";

export const LoginFormContainer = styled.div`
    padding: 55px 20px;

    width: 335px;
    border-radius: 30px;

    background: ${(props) => props.theme.colors.secondBackground};

    @media only screen and (min-width: 768px) {
        padding: 71px 140px;

        width: 704px;
    }
`;

export const LoginFormText = styled.div`
    margin-bottom: 24px;

    letter-spacing: -0.02em;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.black};

    @media only screen and (min-width: ${breakpoints.medium}) {
        margin-bottom: 32px;

        font-size: 18px;
        line-height: 1.22;
    }
`;

export const WrapperInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        gap: 16px;

        margin-bottom: 54px;
    }
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 12px;

    border: 1px solid ${(props) => props.theme.colors.borderGrey};
    border-radius: 30px;

    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.mediumGrey};

    ::placeholder {
        color: ${(props) => props.theme.colors.lightGrey};
    }

    &:focus {
        border-color: ${(props) => props.theme.colors.yellow};
        outline: none;
    }

    &.error {
        border-color: ${(props) => props.theme.colors.red};
    }

    ${({ $isinvalid }) =>
        $isinvalid &&
        css`
            border-color: ${(props) => props.theme.colors.red};
        `}

    ${({ $isvalid }) =>
        $isvalid &&
        css`
            border-color: ${(props) => props.theme.colors.green};
        `}

        @media only screen and (min-width: ${breakpoints.medium}) {
        padding: 16px;

        font-size: 16px;
        line-height: 1.25;
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const IconMessageWrapper = styled.div`
    position: absolute;
    top: 19px;
    right: 16px;

    display: flex;
    align-items: center;
    transform: translateY(-35%);
    transition: all var(--primary-transition);
    fill: ${(props) => props.theme.colors.yellow};

    svg {
        width: 18px;
        height: 18px;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        top: 23px;
        right: 15px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`;

export const IconPasswordMessageWrapper = styled.div`
    position: absolute;
    top: 19px;
    right: 42px;

    display: flex;
    align-items: center;
    transform: translateY(-35%);
    transition: all var(--primary-transition);
    fill: ${(props) => props.theme.colors.yellow};

    svg {
        width: 18px;
        height: 18px;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        top: 23px;
        right: 46px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`;

export const EyeWrapper = styled.div`
    position: absolute;
    top: 19px;
    right: 16px;

    display: flex;
    align-items: center;
    transform: translateY(-35%);
    transition: all var(--primary-transition);
    fill: ${(props) => props.theme.colors.yellow};

    svg {
        width: 18px;
        height: 18px;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        top: 23px;
        right: 15px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`;

export const ErrorText = styled.p`
    margin-left: 12px;
    margin-bottom: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.red};

    @media only screen and (min-width: ${breakpoints.medium}) {
        margin-left: 16px;
    }
`;

export const ValidationMessage = styled.p`
    margin-left: 12px;
    margin-bottom: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.green};

    @media only screen and (min-width: ${breakpoints.medium}) {
        margin-left: 16px;
    }
`;

export const BtnSubmit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    border-radius: 30px;
    padding: 12px 0;
    margin-bottom: 12px;

    font-weight: var(--font-weight-bold);
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.secondBackground};
    background: ${(props) => props.theme.colors.yellow};

    @media only screen and (min-width: ${breakpoints.medium}) {
        padding: 16px 0;
        margin-bottom: 16px;

        font-size: 16px;
        line-height: 1.25;
    }
`;

export const WrapperTextForLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextForLink = styled.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.lightGrey};

    @media only screen and (min-width: ${breakpoints.medium}) {
        font-size: 14px;
        line-height: 1.43;
    }
`;

export const AccentTextForLink = styled(NavLink)`
    font-weight: var(--font-weight-bold);
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${(props) => props.theme.colors.yellow};
`;
