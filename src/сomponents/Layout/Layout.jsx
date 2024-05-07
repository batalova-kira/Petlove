import React from "react";
import { Container, Header, StyledNavLink } from "./Layout.styled";

const Layout = ({ children }) => {
    return (
        <Container>
            <Header>
                <StyledNavLink className="header-link" to="/news">
                    News
                </StyledNavLink>
                <StyledNavLink className="header-link" to="/notices">
                    Notices
                </StyledNavLink>
                <StyledNavLink className="header-link" to="/Friends">
                    Friends
                </StyledNavLink>
            </Header>
            <main>{children}</main>
        </Container>
    );
};

export default Layout;
