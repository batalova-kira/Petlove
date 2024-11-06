import React from "react";
import { HeroImg } from "../HeroImg/HeroImg";
import { DogAddPet } from "./AddPetHero.styled";

export const AddPetHero = () => {
    return (
        <HeroImg
            heightDesktop="654px"
            heightTablet="248px"
            heightMobile="213px"
        >
            <DogAddPet />
        </HeroImg>
    );
};
