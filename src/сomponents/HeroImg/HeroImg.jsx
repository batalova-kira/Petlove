import React from "react";
import {
    BackgroundHero,
    ShapeOverlay,
    WrapperHeroIcon,
} from "./HeroImg.styled";

export const HeroImg = ({ children }) => {
    return (
        <BackgroundHero>
            <ShapeOverlay />
            <WrapperHeroIcon>{children}</WrapperHeroIcon>
        </BackgroundHero>
    );
};
