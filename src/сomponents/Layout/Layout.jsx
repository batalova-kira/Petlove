import React, { useState } from "react";
import {
    AuthContainer,
    AuthNavLink,
    AuthNavLinkLogin,
    AuthNavLinkLoginTablet,
    AuthNavLinkRegistration,
    AuthNavLinkRegistrationTablet,
    BurgerMenuBtn,
    Container,
    Header,
    LogoBtn,
    NameAvatar,
    NavLinkDesk,
    StyledNavLink,
    WrapperAuthNav,
    WrapperAvatarIcon,
    WrapperBtnClose,
    WrapperBurgerAuthNav,
    WrapperBurgerAuthNavTablet,
    WrapperBurgerMenu,
    WrapperHeart,
    WrapperNav,
    WrapperNavMenu,
} from "./Layout.styled";
import { Icon } from "../Icon/Icon";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    selectAuthenticated,
    selectUserData,
} from "../../redux/auth/auth-selectors";
import { LogoutButton } from "../LogoutButton/LogoutButton";

const Layout = ({ children, $isHomePage, $isFriendsPage }) => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const isAuthenticated = useSelector(selectAuthenticated);
    const user = useSelector(selectUserData);

    const toggleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    };

    return (
        <Container $isHomePage={$isHomePage}>
            <Header $isHomePage={$isHomePage} $isFriendsPage={$isFriendsPage}>
                <NavLink to="/">
                    <LogoBtn $isHomePage={$isHomePage}>
                        petl{" "}
                        <WrapperHeart $isHomePage={$isHomePage}>
                            <Icon height={17} width={17} name="icon-logo-mob" />
                        </WrapperHeart>
                        ve
                    </LogoBtn>
                </NavLink>
                <WrapperNavMenu>
                    <NavLinkDesk to="/news" $isHomePage={$isHomePage}>
                        News
                    </NavLinkDesk>
                    <NavLinkDesk to="/notices" $isHomePage={$isHomePage}>
                        Find pet
                    </NavLinkDesk>
                    <NavLinkDesk to="/friends" $isHomePage={$isHomePage}>
                        Our friends
                    </NavLinkDesk>
                </WrapperNavMenu>
                <AuthContainer>
                    <WrapperAuthNav>
                        {isAuthenticated ? (
                            <>
                                <LogoutButton $isHomePage={$isHomePage} />
                            </>
                        ) : (
                            <>
                                <AuthNavLinkLogin
                                    to="/login"
                                    $isHomePage={$isHomePage}
                                >
                                    Log in
                                </AuthNavLinkLogin>
                                <AuthNavLinkRegistration
                                    to="/registration"
                                    $isHomePage={$isHomePage}
                                >
                                    Registration
                                </AuthNavLinkRegistration>
                            </>
                        )}
                    </WrapperAuthNav>
                    {isBurgerMenuOpen ? (
                        // Випливаюче бургер-меню

                        <WrapperBurgerMenu $isHomePage={$isHomePage}>
                            <WrapperBtnClose
                                $isHomePage={$isHomePage}
                                onClick={toggleBurgerMenu}
                            >
                                <Icon
                                    name="icon-close-white"
                                    width={32}
                                    height={32}
                                />
                            </WrapperBtnClose>
                            <WrapperNav>
                                <StyledNavLink
                                    $isHomePage={$isHomePage}
                                    to="/news"
                                >
                                    News
                                </StyledNavLink>
                                <StyledNavLink
                                    $isHomePage={$isHomePage}
                                    to="/notices"
                                >
                                    Find pet
                                </StyledNavLink>
                                <StyledNavLink
                                    $isHomePage={$isHomePage}
                                    to="/friends"
                                >
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
                            {isAuthenticated ? (
                                <>
                                    <WrapperAvatarIcon>
                                        <Icon
                                            name="user-avatar"
                                            width={20}
                                            height={20}
                                        />
                                    </WrapperAvatarIcon>
                                    <NameAvatar>{user.name}</NameAvatar>
                                </>
                            ) : null}
                            <BurgerMenuBtn
                                $isHomePage={$isHomePage}
                                onClick={toggleBurgerMenu}
                            >
                                <Icon
                                    name="icon-burger-menu"
                                    width={32}
                                    height={32}
                                />
                            </BurgerMenuBtn>
                        </>
                    )}
                </AuthContainer>
            </Header>
            <main>{children}</main>
        </Container>
    );
};

export default Layout;
