import React from "react";
import {
    HomePageContainer,
    HomePageImg,
    HomePageTitle,
    HomePageTitleAccent,
    HomePageTitleText,
} from "./HomePage.styled";

const HomePage = () => {
    return (
        <>
            <HomePageContainer>
                <HomePageTitle>
                    Take good <HomePageTitleAccent>care</HomePageTitleAccent> of
                    your small pets
                </HomePageTitle>
                <HomePageTitleText>
                    Choosing a pet for your home is a choice that is meant to
                    enrich your life with immeasurable joy and tenderness.
                </HomePageTitleText>
            </HomePageContainer>
            <HomePageImg />
        </>
    );
};

export default HomePage;
