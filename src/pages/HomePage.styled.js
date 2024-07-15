import styled from "styled-components";
import home_mob_X1 from "/images/bgr_home_mob_x1.webp";
import home_mob_X2 from "/images/bgr_home_mob_x2.webp";

export const HomePageContainer = styled.div`
    padding: 50px 20px;
    padding-top: 118px;
    margin-top: -70px;
    border-radius: 30px;
    width: 100%;
    background: ${(props) => props.theme.colors.yellow};

    @media only screen and (min-width: 768px) {
        /* padding: 71px 140px;

        width: 704px; */
    }
`;

export const HomePageTitle = styled.h2`
    margin-bottom: 24px;

    font-weight: var(--font-weight-bold);
    font-size: 50px;
    line-height: 0.96;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.secondBackground};

    @media only screen and (min-width: 768px) {
        /* padding: 71px 140px;

        width: 704px; */
    }
`;

export const HomePageTitleAccent = styled.span`
    color: ${(props) => props.theme.colors.accentWhite};

    @media only screen and (min-width: 768px) {
        /* padding: 71px 140px;

        width: 704px; */
    }
`;

export const HomePageTitleText = styled.p`
    font-weight: var(--font-weight-medium);
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;

    @media only screen and (min-width: 768px) {
        /* padding: 71px 140px;

        width: 704px; */
    }
`;

export const HomePageImg = styled.div`
    width: 335px;
    height: 402px;
    border-radius: 30px;

    /* background: url() no-repeat center center; */
    background-size: contain;

    @media (max-width: 767px) {
        background: url(${home_mob_X1}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${home_mob_X2}) no-repeat center center;
            background-size: cover;
        }
    }
    /* 
    @media only screen and (min-width: 768px) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url() no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url() no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 1280px) {
        width: 512px;
        height: 660px;

        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);

        background: url() no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url() no-repeat center center;
            background-size: cover;
        } */
    /* } */
`;
