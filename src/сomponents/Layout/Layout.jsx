import React from "react";
import {
    BurgerMenuBtn,
    Container,
    Header,
    StyledNavLink,
} from "./Layout.styled";
import { Icon } from "../Icon/Icon";

const Layout = ({ children }) => {
    return (
        <Container>
            <Header>
                <StyledNavLink className="header-link" to="/">
                    HomePage
                </StyledNavLink>
                <StyledNavLink className="header-link" to="/news">
                    News
                </StyledNavLink>
                <StyledNavLink className="header-link" to="/notices">
                    Notices
                </StyledNavLink>
                <StyledNavLink className="header-link" to="/friends">
                    Friends
                </StyledNavLink>
                <BurgerMenuBtn>
                    <Icon height={32} width={32} name="icon-burger-menu" />
                </BurgerMenuBtn>
            </Header>
            <main>{children}</main>
        </Container>
    );
};

export default Layout;
