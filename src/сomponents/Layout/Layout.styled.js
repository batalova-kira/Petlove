import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
    justify-content: center;
    gap: 16px;
    margin-bottom: 40px;
`;

export const StyledNavLink = styled(NavLink)`
    padding: 12px 24px;
    border-radius: 12px;
    border: none;

    /* font-family: var(--font-family); */
    font-weight: 600;
    font-size: 14px;
    line-height: 1.43;
    text-decoration: none;
    background: ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.background};
    transition-duration: 0.4s;

    &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.colors.lightYellow};
        color: ${(props) => props.theme.colors.black};
        /* box-shadow: 0px 2px 5px 3px #97b1bf; */
    }
`;

export const BurgerMenuBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.black};
    stroke: ${(props) => props.theme.colors.black};
`;
