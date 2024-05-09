import React from "react";
import {
    BurgerMenuBtn,
    Container,
    Header,
    StyledNavLink,
} from "./Layout.styled";

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
                    <svg>
                        <use xlinkHref="/sprite.svg#icon-burger" />
                    </svg>
                </BurgerMenuBtn>
            </Header>
            <main>{children}</main>
        </Container>
    );
};

export default Layout;
