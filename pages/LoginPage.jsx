import React from "react";
import { HeroImg } from "../src/сomponents/HeroImg/HeroImg";
import { IconDogMobile } from "./LoginPage.styled";
import { HeroCard } from "../src/сomponents/HeroCard/HeroCard";

const LoginPage = () => {
    return (
        <>
            <HeroImg>
                <IconDogMobile />
                <HeroCard />
            </HeroImg>
        </>
    );
};

export default LoginPage;
