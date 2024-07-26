import styled from "styled-components";
import { breakpoints } from "../constants/breakpoints.js";
import home_mob_X1 from "/images/bgr_home_mob_x1.webp";
import home_mob_X2 from "/images/bgr_home_mob_x2.webp";
import home_tab_X1 from "/images/bgr_home_tab_x1.webp";
import home_tab_X2 from "/images/bgr_home_tab_x2.webp";
import home_desk_X1 from "/images/bgr_home_desk_x1.webp";
import home_desk_X2 from "/images/bgr_home_desk_x2.webp";

export const HomePageContainer = styled.div`
    padding: 50px 20px;
    padding-top: 118px;
    margin-top: -70px;
    border-radius: 30px;
    width: 100%;
    background: ${(props) => props.theme.colors.yellow};

    @media only screen and (min-width: ${breakpoints.medium}) {
        margin-top: -100px;
        padding: 44px 32px;
        padding-top: 178px;

        border-radius: 60px;
    }
    @media only screen and (min-width: ${breakpoints.large}) {
        display: flex;
        flex-direction: row;
        align-items: end;
        gap: 73px;

        padding: 32px 64px;
        padding-top: 178px;
    }
`;

export const HomePageTitle = styled.h2`
    margin-bottom: 24px;

    font-weight: var(--font-weight-bold);
    font-size: 50px;
    line-height: 0.96;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.secondBackground};

    @media only screen and (min-width: ${breakpoints.medium}) {
        margin-bottom: 32px;

        font-size: 80px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        margin-bottom: 0px;

        font-size: 90px;
    }
`;

export const HomePageTitleAccent = styled.span`
    color: ${(props) => props.theme.colors.accentWhite};
`;

export const HomePageTitleText = styled.p`
    font-weight: var(--font-weight-medium);
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;

    @media only screen and (min-width: ${breakpoints.medium}) {
        max-width: 255px;
        margin-left: auto;
        font-size: 18px;
        line-height: 1.22;
    }
`;

export const HomePageImg = styled.div`
    width: 335px;
    height: 402px;
    border-radius: 30px;

    background: url(${home_tab_X1}) no-repeat center center;
    background-size: contain;

    @media (max-width: 767px) {
        background: url(${home_mob_X1}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${home_mob_X2}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        border-radius: 60px;
        width: 704px;
        height: 496px;

        background: url(${home_tab_X1}) no-repeat center center;
        background-size: cover;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${home_tab_X2}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        width: 1216px;
        height: 384px;

        background: url(${home_desk_X1}) no-repeat center center;
        background-size: cover;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${home_desk_X2}) no-repeat center center;
            background-size: cover;
        }
    }
`;
