import React, { useState } from "react";
import {
    BurgerMenuBtn,
    Container,
    Header,
    LogoBtn,
    StyledNavLink,
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
                {isBurgerMenuOpen && (
                    <nav>
                        <StyledNavLink className="header-link" to="/news">
                            News
                        </StyledNavLink>
                        <StyledNavLink className="header-link" to="/notices">
                            Notices
                        </StyledNavLink>
                        <StyledNavLink className="header-link" to="/friends">
                            Friends
                        </StyledNavLink>
                    </nav>
                )}

                <BurgerMenuBtn onClick={toggleBurgerMenu}>
                    <Icon name="icon-burger-menu" width={32} height={32} />
                </BurgerMenuBtn>
            </Header>
            <main>{children}</main>
        </Container>
    );
};

export default Layout;
