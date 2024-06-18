import React from "react";
import { StyledLoginContainer } from "./LoginPage.styled";
import { HeroImg } from "../сomponents/HeroImg/HeroImg";
import { HeroCard } from "../сomponents/HeroCard/HeroCard";
import { IconCatHero } from "./RegisterPage.styled";
import cat_avatar_x1 from "/images/🐈avatar_cat.png";
import cat_avatar_x2 from "/images/🐈avatar_cat_x2.png";

const RegisterPage = () => {
    return (
        <StyledLoginContainer>
            <HeroImg>
                <IconCatHero />
                <HeroCard
                    avatarSrc={cat_avatar_x1}
                    avatarSrc2x={cat_avatar_x2}
                    title="Jack"
                    birthDate="18.10.2021"
                    description="Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."
                />
            </HeroImg>
            <div>RegisterForm</div>
        </StyledLoginContainer>
    );
};

export default RegisterPage;
