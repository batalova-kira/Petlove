import React from "react";
import { HeroImg } from "../src/сomponents/HeroImg/HeroImg";
import { IconDogMobile, StyledLoginContainer } from "./LoginPage.styled";
import { HeroCard } from "../src/сomponents/HeroCard/HeroCard";
import { LoginForm } from "../src/сomponents/LoginForm/LoginForm";

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
