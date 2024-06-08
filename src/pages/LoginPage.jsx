import React from "react";
import { HeroImg } from "../сomponents/HeroImg/HeroImg";
import { IconDogMobile, StyledLoginContainer } from "./LoginPage.styled";
import { HeroCard } from "../сomponents/HeroCard/HeroCard";
import { LoginForm } from "../сomponents/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <StyledLoginContainer>
            <HeroImg>
                <IconDogMobile />
                <HeroCard />
            </HeroImg>
            <LoginForm />
        </StyledLoginContainer>
    );
};

export default LoginPage;
