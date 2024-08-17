import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { breakpoints } from "../../constants/breakpoints.js";

export const Container = styled.div`
    // Basic styles
    min-width: 320px;
    width: 100vw;
    max-width: 375px;
    padding: 10px 20px;
    padding-bottom: 20px;

    margin: 0 auto;

    @media only screen and (min-width: ${breakpoints.medium}) {
        max-width: 704px;
        width: 100%;
        padding: 32px 0px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        max-width: ${({ $isHomePage }) => ($isHomePage ? "1216px" : "1152px")};
        padding: ${({ $isHomePage }) =>
            $isHomePage ? "16px 0px" : "32px 0px"};
    }
`;

const getMarginBottom = (props) => {
    if (props.$isFriendsPage) {
        return {
            large: "96px",
            medium: "85px",
            small: "54px",
        };
    }
    if (props.$isNoticesPage) {
        return {
            large: "96px",
            medium: "85px",
            small: "54px",
        };
    }
    return {
        large: "32px",
        medium: "32px",
        small: "20px",
    };
};

export const Header = styled.header`
    width: 100%;
    max-width: 100%;
    display: flex;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: ${({ $isHomePage }) => ($isHomePage ? "0px 20px" : 0)};
    padding-top: 18px;

    margin-bottom: ${(props) => getMarginBottom(props).small};

    @media only screen and (min-width: ${breakpoints.medium}) {
        margin-top: ${({ $isHomePage }) => ($isHomePage ? "16px" : 0)};
        padding: ${({ $isHomePage }) => ($isHomePage ? "0px 32px" : 0)};
        margin-bottom: ${(props) => getMarginBottom(props).medium};
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        padding: ${({ $isHomePage }) => ($isHomePage ? "0px 64px" : 0)};
        margin-bottom: ${(props) => getMarginBottom(props).large};
    }
`;

export const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;

    border: ${({ $isHomePage, theme }) =>
        $isHomePage
            ? `1px solid ${theme.colors.yellow}`
            : `1px solid ${theme.colors.borderWhite}`};
    border-radius: 30px;
    padding: 15px 0;
    width: 119px;

    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;
    text-decoration: none;

    color: ${({ $isHomePage, theme }) =>
        $isHomePage ? theme.colors.black : theme.colors.secondBackground};
    transition-duration: 0.4s;

    &:not(.active) {
        border: ${({ $isHomePage, theme }) =>
            $isHomePage
                ? `1px solid ${theme.colors.borderGrey}`
                : `1px solid ${theme.colors.borderWhiteActive}`};
    }

    &:hover,
    &:focus {
        cursor: pointer;
        border: ${({ $isHomePage, theme }) =>
            $isHomePage
                ? `1px solid ${theme.colors.yellow}`
                : `1px solid ${theme.colors.borderWhite}`};
        background: ${({ $isHomePage, theme }) =>
            $isHomePage ? "none" : theme.colors.lightYellow};
        color: ${({ $isHomePage, theme }) =>
            $isHomePage ? theme.colors.black : theme.colors.yellow};
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        font-size: 16px;
        line-height: 1.25;
    }
`;

export const LogoBtn = styled.button`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: row;
    gap: 0px;
    background: none;
    margin: 0;

    font-weight: var(--font-weight-bold);
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.04em;
    color: ${({ $isHomePage, theme }) =>
        $isHomePage ? theme.colors.secondBackground : theme.colors.black};
    fill: ${({ $isHomePage, theme }) =>
        $isHomePage ? theme.colors.secondBackground : theme.colors.yellow};

    @media only screen and (min-width: ${breakpoints.medium}) {
        font-size: 28px;
    }
`;

export const WrapperNavMenu = styled.div`
    display: none;

    @media only screen and (min-width: ${breakpoints.large}) {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 10px;
        margin-right: auto;
        margin-left: auto;
    }
`;

export const NavLinkDesk = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100%; */
    padding: 15px 20px;

    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 125%;
    letter-spacing: -0.03em;

    border: ${({ $isHomePage, theme }) =>
        $isHomePage
            ? `1px solid ${theme.colors.accentWhite}`
            : `1px solid ${theme.colors.borderGrey}`};
    border-radius: 30px;
    color: ${({ $isHomePage, theme }) =>
        $isHomePage ? theme.colors.secondBackground : theme.colors.black};

    &:hover,
    &:focus {
        cursor: pointer;
        border: ${({ $isHomePage, theme }) =>
            $isHomePage ? "none" : `1px solid ${theme.colors.yellow}`};
        color: ${({ $isHomePage, theme }) =>
            $isHomePage ? theme.colors.yellow : "none"};
        background: ${({ $isHomePage, theme }) =>
            $isHomePage ? theme.colors.lightYellow : "none"};
    }
`;

export const AuthContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 16px;
`;

export const WrapperAuthNav = styled.div`
    display: none;

    @media only screen and (min-width: ${breakpoints.medium}) {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 8px;
    }
`;

export const WrapperHeart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    stroke: ${({ $isHomePage, theme }) =>
        $isHomePage ? theme.colors.secondBackground : theme.colors.yellow};
    fill: ${({ $isHomePage, theme }) =>
        $isHomePage ? theme.colors.secondBackground : theme.colors.yellow};
    color: ${({ $isHomePage, theme }) =>
        $isHomePage ? theme.colors.secondBackground : theme.colors.yellow};

    svg {
        width: 17px;
        height: 17px;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        svg {
            width: 23px;
            height: 23px;
        }
    }
`;

export const AuthNavLinkLogin = styled(NavLink)`
    display: none;

    @media only screen and (min-width: ${breakpoints.medium}) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border-radius: 30px;
        padding: 15px 35px;

        font-weight: var(--font-weight-bold);
        font-size: 16px;
        line-height: 1.25;
        letter-spacing: -0.03em;
        text-transform: uppercase;

        border: ${({ $isHomePage, theme }) =>
            $isHomePage ? `1px solid ${theme.colors.accentWhite}` : "none"};
        color: ${(props) => props.theme.colors.secondBackground};
        background: ${(props) => props.theme.colors.yellow};

        &:hover {
            cursor: pointer;
            background: ${(props) => props.theme.colors.lightYellow};
            color: ${(props) => props.theme.colors.yellow};
        }
    }
`;

export const AuthNavLinkRegistration = styled(AuthNavLinkLogin)`
    width: 100%;
    padding: 15px 20px;
`;

export const BurgerMenuBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all var(--primary-transition);
    color: ${({ $isHomePage, theme }) =>
        $isHomePage ? theme.colors.secondBackground : theme.colors.black};

    &:hover {
        transform: scale(1.1);
    }

    svg {
        width: 32px;
        height: 32px;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        svg {
            width: 36px;
            height: 36px;
        }
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        display: none;
    }
`;

export const WrapperAvatar = styled.div`
    @media only screen and (min-width: ${breakpoints.medium}) {
        display: flex;
        flex-direction: row;
        gap: 8px;
    }
`;

export const WrapperAvatarIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    border-radius: 50%;

    background: ${(props) => props.theme.colors.lightYellow};

    svg {
        width: 20px;
        height: 20px;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        width: 50px;
        height: 50px;

        svg {
            width: 24px;
            height: 24px;
        }
    }
`;

export const NameAvatar = styled.p`
    @media only screen and (max-width: 767px) {
        display: none;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        font-weight: var(--font-weight-bold);
        font-size: 20px;
        line-height: 1;
        letter-spacing: -0.03em;
    }
`;

export const WrapperBurgerMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 218px;
    height: 100vh;
    padding: 28px 20px;

    overflow-y: auto;
    z-index: 1000;
    transition: transform 0.3s ease;
    background: ${({ $isHomePage, theme }) =>
        $isHomePage ? theme.colors.secondBackground : theme.colors.yellow};

    @media only screen and (min-width: ${breakpoints.medium}) {
        width: 374px;
        padding: 40px 32px;
    }
`;

export const WrapperBtnClose = styled.div`
    display: flex;
    margin-left: auto;
    margin-bottom: 176px;
    cursor: pointer;
    transition: all var(--primary-transition);

    stroke: ${({ $isHomePage, theme }) =>
        $isHomePage ? theme.colors.black : theme.colors.secondBackground};

    &:hover {
        transform: scale(1.1);
    }

    svg {
        width: 32px;
        height: 32px;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        margin-bottom: 294px;
        svg {
            width: 36px;
            height: 36px;
        }
    }
`;

export const WrapperNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;
`;

export const WrapperBurgerAuthNav = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 8px;
    margin-top: auto;

    @media only screen and (min-width: ${breakpoints.medium}) {
        display: none;
    }
`;

export const AuthNavLink = styled(NavLink)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 30px;
    border: 1px solid ${(props) => props.theme.colors.borderWhite};
    padding: 12px 0;

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

export const ContainerAuthNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 8px;
    margin-top: auto;
`;

export const WrapperBurgerAuthNavTablet = styled.div`
    display: none;
    @media only screen and (min-width: ${breakpoints.medium}) {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: row;
        gap: 8px;
        margin-top: auto;
    }
`;

export const AuthNavLinkLoginTablet = styled(AuthNavLinkLogin)`
    border: 1px solid ${(props) => props.theme.colors.borderWhite};
`;

export const AuthNavLinkRegistrationTablet = styled(AuthNavLinkRegistration)`
    border: 1px solid ${(props) => props.theme.colors.borderWhite};
`;
