import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    // Basic styles
    min-width: 320px;
    max-width: 375px;
    padding: 10px 20px;
    padding-bottom: 20px;

    margin: 0 auto;

    @media only screen and (min-width: 768px) {
        max-width: 704px;
        width: 704px;
        padding: 32px 0px;
    }

    @media only screen and (min-width: 1280px) {
        max-width: 1152px;
        width: 1152px;
    }
`;

export const Header = styled.header`
    width: 100%;
    max-width: 100%;
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* gap: 16px; */
    padding: ${({ $isHomePage }) => ($isHomePage ? "0px 20px" : 0)};
    padding-top: 18px;
    margin-bottom: 20px;

    @media only screen and (min-width: 768px) {
        padding-top: 0px;
        margin-bottom: 32px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.theme.colors.borderWhite};
    border-radius: 30px;
    padding: 15px 0;
    width: 119px;

    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;
    text-decoration: none;

    color: ${(props) => props.theme.colors.secondBackground};
    transition-duration: 0.4s;

    &:not(.active) {
        border: 1px solid ${(props) => props.theme.colors.borderWhiteActive};
    }

    &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.colors.lightYellow};
        color: ${(props) => props.theme.colors.yellow};
    }

    @media only screen and (min-width: 768px) {
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

    @media only screen and (min-width: 768px) {
        font-size: 28px;
    }
`;

export const WrapperNavMenu = styled.div`
    display: none;

    @media only screen and (min-width: 1280px) {
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

    border: 1px solid ${(props) => props.theme.colors.borderGrey};
    border-radius: 30px;
    color: ${(props) => props.theme.colors.black};

    &:hover {
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.colors.yellow};
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

    @media only screen and (min-width: 768px) {
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

    svg {
        width: 17px;
        height: 17px;
        stroke: ${({ $isHomePage, theme }) =>
            $isHomePage ? theme.colors.secondBackground : theme.colors.yellow};
        fill: ${({ $isHomePage, theme }) =>
            $isHomePage ? theme.colors.secondBackground : theme.colors.yellow};
    }

    @media only screen and (min-width: 768px) {
        svg {
            width: 23px;
            height: 23px;
        }
    }
`;

export const AuthNavLinkLogin = styled(NavLink)`
    display: none;

    @media only screen and (min-width: 768px) {
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

    @media only screen and (min-width: 768px) {
        display: none;
    }
`;

export const BurgerMenuBtnTablet = styled.button`
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

    @media only screen and (max-width: 767px), (min-width: 1280px) {
        display: none;
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
    color: ${(props) => props.theme.colors.secondBackground};
    /* box-shadow: -1px 0 7px rgba(0, 0, 0, 0.1); */
    overflow-y: auto;
    z-index: 1000;
    transition: transform 0.3s ease;
    background: ${(props) => props.theme.colors.yellow};

    @media only screen and (min-width: 768px) {
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
    stroke: ${(props) => props.theme.colors.yellow};

    &:hover {
        transform: scale(1.1);
    }

    svg {
        width: 32px;
        height: 32px;
    }

    @media only screen and (min-width: 768px) {
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

    @media only screen and (min-width: 768px) {
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
    @media only screen and (min-width: 768px) {
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
