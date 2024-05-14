import React, { useState } from "react";
import {
    AuthContainer,
    AuthNavLink,
    AuthNavLinkLogin,
    AuthNavLinkRegistration,
    BtnClose,
    BurgerMenuBtn,
    Container,
    Header,
    LogoBtn,
    StyledNavLink,
    WrapperAuthNav,
    WrapperBtnClose,
    WrapperBurgerAuthNav,
    WrapperBurgerMenu,
    WrapperNav,
} from "./Layout.styled";
import { Icon } from "../Icon/Icon";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    const toggleBurgerMenu = () => {
        console.log(isBurgerMenuOpen);
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    };

    return (
        <Container>
            <Header>
                <NavLink className="header-link" to="/">
                    <LogoBtn>
                        petl{" "}
                        <Icon height={17} width={17} name="icon-logo-mob" />
                        ve
                    </LogoBtn>
                </NavLink>
                <AuthContainer>
                    <WrapperAuthNav>
                        <AuthNavLinkLogin className="header-link" to="/login">
                            Log in
                        </AuthNavLinkLogin>
                        <AuthNavLinkRegistration
                            className="header-link"
                            to="/registration"
                        >
                            Registration
                        </AuthNavLinkRegistration>
                    </WrapperAuthNav>
                    {isBurgerMenuOpen ? (
                        // Випливаюче бургер-меню
                        <WrapperBurgerMenu className="burger-menu">
                            <WrapperBtnClose
                                className="burger-menu-close"
                                onClick={toggleBurgerMenu}
                            >
                                <BtnClose
                                    name="icon-close-white"
                                    width={32}
                                    height={32}
                                />
                            </WrapperBtnClose>
                            <WrapperNav className="burger-menu-nav">
                                <StyledNavLink
                                    className="header-link"
                                    to="/news"
                                >
                                    News
                                </StyledNavLink>
                                <StyledNavLink
                                    className="header-link"
                                    to="/notices"
                                >
                                    Find pet
                                </StyledNavLink>
                                <StyledNavLink
                                    className="header-link"
                                    to="/friends"
                                >
                                    Our friends
                                </StyledNavLink>
                            </WrapperNav>
                            <WrapperBurgerAuthNav>
                                <AuthNavLink
                                    className="header-link"
                                    to="/login"
                                >
                                    Log in
                                </AuthNavLink>
                                <AuthNavLink
                                    className="header-link"
                                    to="/registration"
                                >
                                    Registration
                                </AuthNavLink>
                            </WrapperBurgerAuthNav>
                        </WrapperBurgerMenu>
                    ) : (
                        // Кнопка бургер-меню
                        <BurgerMenuBtn onClick={toggleBurgerMenu}>
                            <Icon
                                name="icon-burger-menu"
                                width={32}
                                height={32}
                            />
                        </BurgerMenuBtn>
                    )}
                </AuthContainer>
            </Header>
            <main>{children}</main>
        </Container>
    );
};

export default Layout;
