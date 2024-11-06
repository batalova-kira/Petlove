import React from "react";
import {
    BackgroundHero,
    ShapeOverlay,
    WrapperHeroIcon,
} from "./HeroImg.styled";

export const HeroImg = ({
    children,
    heightDesktop,
    heightTablet,
    heightMobile,
}) => {
    return (
        <BackgroundHero
            $heightDesktop={heightDesktop}
            $heightTablet={heightTablet}
            $heightMobile={heightMobile}
        >
            <ShapeOverlay />
            <WrapperHeroIcon>{children}</WrapperHeroIcon>
        </BackgroundHero>
    );
};
