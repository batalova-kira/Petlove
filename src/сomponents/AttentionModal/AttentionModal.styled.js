import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const stylesAttention = {
    modalWidth: "335px",
    modalPadding: "40px 20px",
    mediumModalWidth: "466px",
    mediumModalPadding: "60px",
};

export const WrapperAttentionAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.lightYellow};
`;

export const AttentionAvatar = styled.div`
    width: 44px;
    height: 44px;
    background: url(${(props) => props.$avatarSrc}) no-repeat center center;
    background-size: cover;
    z-index: 20;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background: url(${(props) => props.$avatarSrc2x}) no-repeat center
            center;
        background-size: cover;
        z-index: 20;
    }
`;

export const AttentionTitle = styled.h3`
    margin-bottom: 20px;

    font-weight: var(--font-weight-bold);
    font-size: 20px;

    line-height: 1;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.yellow};
`;

export const AttentionText = styled.p`
margin-bottom: 24px;

    font-size: 14px;

    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.secondaryBlack};
`;

export const WrapperAttentionBtns = styled.div`
display:flex;
flex-direction:row;
gap: 8px;
`;

export const LoginBtn = styled(NavLink)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 30px;
    border: 1px solid ${(props) => props.theme.colors.borderWhite};
    padding: 12px 48px;

    font-weight: var(--font-weight-bold);
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;
    text-transform: uppercase;

    color: ${(props) => props.theme.colors.secondBackground};
    background: ${(props) => props.theme.colors.yellow};

    &:hover {
        cursor: pointer;
        border: none;
        background: ${(props) => props.theme.colors.lightYellow};
        color: ${(props) => props.theme.colors.yellow};
    }
`;

export const RegisterBtn = styled(LoginBtn)`
    padding: 12px 24px;

    color: ${(props) => props.theme.colors.yellow};
    background: ${(props) => props.theme.colors.lightYellow};

    &:hover {
        cursor: pointer;
        border: none;
        background: ${(props) => props.theme.colors.yellow};
        color: ${(props) => props.theme.colors.lightYellow};
    }
`;