import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";

export const Container = styled.div`
    // Basic styles
    min-width: 320px;
    max-width: 375px;
    padding: 10px 20px;

    margin: 0 auto;

    @media only screen and (min-width: 768px) {
        max-width: 768px;
        padding: 16px 32px;
    }
    @media only screen and (min-width: 1280px) {
        max-width: 1280px;
    }
`;

export const Header = styled.header`
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 18px 0px;
`;

export const LogoBtn = styled.button`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: row;
    gap: 0px;
    background: none;
    margin: 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.04em;
    color: ${(props) => props.theme.colors.black};
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
    color: ${(props) => props.theme.colors.black};

    &:hover {
        transform: scale(1.1);
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
    background-color: ${(props) => props.theme.colors.secondBackground};
    /* box-shadow: -1px 0 7px rgba(0, 0, 0, 0.1); */
    overflow-y: auto;
    z-index: 1000;
    /* transition: transform 0.3s ease; */
    background: ${(props) => props.theme.colors.yellow};
`;

export const WrapperBtnClose = styled.div`
    margin-left: auto;
    margin-bottom: 176px;
    cursor: pointer;
    transition: all var(--primary-transition);
    stroke: ${(props) => props.theme.colors.yellow};

    &:hover {
        transform: scale(1.1);
    }
`;

export const BtnClose = styled(Icon)`
    transition: all var(--primary-transition);
    stroke: ${(props) => props.theme.colors.yellow};

    &:hover {
        transform: scale(1.1);
    }
`;

export const WrapperNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 30px;
    padding: 15px 0;
    width: 119px;

    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.03em;
    text-decoration: none;

    color: ${(props) => props.theme.colors.background};
    transition-duration: 0.4s;

    &:not(.active) {
        border: 1px solid rgba(255, 255, 255, 0.15);
    }

    &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.colors.lightYellow};
        color: ${(props) => props.theme.colors.yellow};
    }
`;

export const WrapperAuthNav = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 8px;
    margin-top: auto;
`;

export const AuthNavLink = styled(StyledNavLink)`
    font-family: var(--font-family);
    width: 100%;
    font-weight: 700;
    text-transform: uppercase;
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
