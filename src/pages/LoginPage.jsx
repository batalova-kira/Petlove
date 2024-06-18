import React from "react";
import { HeroImg } from "../сomponents/HeroImg/HeroImg";
import { IconDogMobile, StyledLoginContainer } from "./LoginPage.styled";
import { HeroCard } from "../сomponents/HeroCard/HeroCard";
import { LoginForm } from "../сomponents/LoginForm/LoginForm";
import dog_avatar_x1 from "/images/🐶avatar_dog.png";
import dog_avatar_x2 from "/images/🐶avatar_dog_x2.png";

const LoginPage = () => {
    return (
        <StyledLoginContainer>
            <HeroImg>
                <IconDogMobile />
                <HeroCard
                    avatarSrc={dog_avatar_x1}
                    avatarSrc2x={dog_avatar_x2}
                    title="Rich"
                    birthDate="21.09.2020"
                    description="Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"
                />
            </HeroImg>
            <LoginForm />
        </StyledLoginContainer>
    );
};

export default LoginPage;
