import React, { useState } from "react";
import {
    AuthContainer,
    AuthNavLink,
    AuthNavLinkLogin,
    AuthNavLinkLoginTablet,
    AuthNavLinkRegistration,
    AuthNavLinkRegistrationTablet,
    BurgerMenuBtn,
    BurgerMenuBtnTablet,
    Container,
    Header,
    LogoBtn,
    NavLinkDesk,
    StyledNavLink,
    WrapperAuthNav,
    WrapperBtnClose,
    WrapperBtnCloseTablet,
    WrapperBurgerAuthNav,
    WrapperBurgerAuthNavTablet,
    WrapperBurgerMenu,
    WrapperHeart,
    WrapperHeartTablet,
    WrapperNav,
    WrapperNavMenu,
} from "./Layout.styled";
import { Icon } from "../Icon/Icon";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthenticated } from "../../redux/auth/auth-selectors";
import { LogoutButton } from "../LogoutButton/LogoutButton";

const Layout = ({ children }) => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const isAuthenticated = useSelector(selectAuthenticated);

    const toggleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    };

    return (
        <Container>
            <Header>
                <NavLink to="/">
                    <LogoBtn>
                        petl{" "}
                        <WrapperHeart>
                            <Icon height={17} width={17} name="icon-logo-mob" />
                        </WrapperHeart>
                        <WrapperHeartTablet>
                            <Icon height={23} width={23} name="icon-logo-mob" />
                        </WrapperHeartTablet>
                        ve
                    </LogoBtn>
                </NavLink>
                <WrapperNavMenu>
                    <NavLinkDesk to="/news">News</NavLinkDesk>
                    <NavLinkDesk to="/notices">Find pet</NavLinkDesk>
                    <NavLinkDesk to="/friends">Our friends</NavLinkDesk>
                </WrapperNavMenu>
                <AuthContainer>
                    <WrapperAuthNav>
                        <AuthNavLinkLogin to="/login">Log in</AuthNavLinkLogin>
                        {isAuthenticated ? (
                            <LogoutButton />
                        ) : (
                            <AuthNavLinkRegistration to="/registration">
                                Registration
                            </AuthNavLinkRegistration>
                        )}
                    </WrapperAuthNav>
                    {isBurgerMenuOpen ? (
                        // Випливаюче бургер-меню
                        <WrapperBurgerMenu>
                            <WrapperBtnClose onClick={toggleBurgerMenu}>
                                <Icon
                                    name="icon-close-white"
                                    width={32}
                                    height={32}
                                />
                            </WrapperBtnClose>
                            <WrapperBtnCloseTablet onClick={toggleBurgerMenu}>
                                <Icon
                                    name="icon-close-white"
                                    width={36}
                                    height={36}
                                />
                            </WrapperBtnCloseTablet>
                            <WrapperNav>
                                <StyledNavLink to="/news">News</StyledNavLink>
                                <StyledNavLink to="/notices">
                                    Find pet
                                </StyledNavLink>
                                <StyledNavLink to="/friends">
                                    Our friends
                                </StyledNavLink>
                            </WrapperNav>
                            <WrapperBurgerAuthNav>
                                <AuthNavLink to="/login">Log in</AuthNavLink>
                                {isAuthenticated ? (
                                    <LogoutButton />
                                ) : (
                                    <AuthNavLink to="/registration">
                                        Registration
                                    </AuthNavLink>
                                )}
                            </WrapperBurgerAuthNav>
                            <WrapperBurgerAuthNavTablet>
                                <AuthNavLinkLoginTablet to="/login">
                                    Log in
                                </AuthNavLinkLoginTablet>
                                {isAuthenticated ? (
                                    <LogoutButton />
                                ) : (
                                    <AuthNavLinkRegistrationTablet to="/registration">
                                        Registration
                                    </AuthNavLinkRegistrationTablet>
                                )}
                            </WrapperBurgerAuthNavTablet>
                        </WrapperBurgerMenu>
                    ) : (
                        // Кнопка бургер-меню
                        <>
                            <BurgerMenuBtn onClick={toggleBurgerMenu}>
                                <Icon
                                    name="icon-burger-menu"
                                    width={32}
                                    height={32}
                                />
                            </BurgerMenuBtn>
                            <BurgerMenuBtnTablet onClick={toggleBurgerMenu}>
                                <Icon
                                    name="icon-burger-menu"
                                    width={36}
                                    height={36}
                                />
                            </BurgerMenuBtnTablet>
                        </>
                    )}
                </AuthContainer>
            </Header>
            <main>{children}</main>
        </Container>
    );
};

export default Layout;
