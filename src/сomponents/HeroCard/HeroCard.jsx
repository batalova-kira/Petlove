import React from "react";
import {
    HeroAvatar,
    WrapperHeroAvatar,
    WrapperHeroCard,
} from "./HeroCard.styled";

export const HeroCard = () => {
    return (
        <WrapperHeroCard>
            <WrapperHeroAvatar>
                <HeroAvatar />
            </WrapperHeroAvatar>
            <WrapperCardDesc>
                <div></div>
            </WrapperCardDesc>
        </WrapperHeroCard>
    );
};
