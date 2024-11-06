import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";
import { NavLink } from "react-router-dom";

export const ContainerUserCard = styled.div`
    width: 100%;
    padding: 18px 20px 40px 20px;

    border-radius: 30px;
    background: ${(props) => props.theme.colors.secondBackground};

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const ContainerUserCardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const WrapperUserBtn = styled.button`
    display: flex;
    flex-direction: row;
    gap: 4px;

    padding: 10px 14px;
    border-radius: 30px;

    color: ${(props) => props.theme.colors.secondBackground};
    background: ${(props) => props.theme.colors.yellow};

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const TextIconUserCard = styled.p`
    font-weight: 500;
    font-size: 14px;

    line-height: 1.29;
    letter-spacing: -0.02em;
`;

export const WrapperIconUserCard = styled.div`
    width: 18px;
    height: 18px;

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const WrapperEditUserBtn = styled.button`
    display: flex;
    align-items: center;

    padding: 12px;
    border-radius: 50%;

    color: ${(props) => props.theme.colors.yellow};
    background: ${(props) => props.theme.colors.lightYellow};

    &:focus,
    &:hover {
        background: ${(props) => props.theme.colors.hoverYellow};
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const WrapperUserBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-bottom: 28px;

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const WrapperUserBlockImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;

    width: 94px;
    height: 94px;
    border-radius: 50%;
    overflow: hidden;

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const WrapperUserBlockAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;

    width: 94px;
    height: 94px;
    border-radius: 50%;

    background: ${(props) => props.theme.colors.lightYellow};

    svg {
        width: 40px;
        height: 40px;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const UserBtnUploadPhoto = styled.button`
    font-size: 12px;

    line-height: 1.33;
    letter-spacing: -0.02em;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${(props) => props.theme.colors.black};
    background: none;
    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const UserInformationTitle = styled.h3`
    margin-bottom: 20px;

    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;

    color: ${(props) => props.theme.colors.secondaryBlack};

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const UserInformationBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-bottom: 40px;
    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const UserInformationInput = styled.input`
    width: 100%;

    border: 1px solid ${(props) => props.theme.colors.lightestGrey};
    border-radius: 30px;
    padding: 12px;

    font-weight: 500;
    font-size: 14px;

    line-height: 1.29;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.black};

    &:focus,
    &:hover {
        outline: none;
        border: 1px solid ${(props) => props.theme.colors.yellow};
    }
    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const UserPetsInformationBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 40px;
    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const UserPetsInformationTitle = styled.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;

    line-height: 1.25;
    color: ${(props) => props.theme.colors.secondaryBlack};
`;

export const PetsAddBtn = styled(NavLink)`
    display: flex;
    gap: 4px;

    border-radius: 30px;
    padding: 10px 16px;

    font-size: 16px;
    line-height: 1.29;
    color: ${(props) => props.theme.colors.secondBackground};
    background: ${(props) => props.theme.colors.yellow};

    &:focus,
    &:hover {
        background: ${(props) => props.theme.colors.secondaryHoverYellow};
    }
`;

export const UserInformationLogout = styled.button`
    border-radius: 30px;
    padding: 12px 28px;

    font-weight: var(--font-weight-bold);
    font-size: 14px;

    line-height: 1.29;
    letter-spacing: -0.03em;
    text-transform: uppercase;

    color: ${(props) => props.theme.colors.yellow};
    background: ${(props) => props.theme.colors.lightYellow};

    &:focus,
    &:hover {
        background: ${(props) => props.theme.colors.hoverYellow};
    }
`;
