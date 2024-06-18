import styled from "styled-components";
import cat_hero_X1 from "/images/cat-hero-mob-x1.png";
import cat_hero_X2 from "/images/cat-hero-mob-x2.png";
import cat_hero_tab_X1 from "/images/cat-hero-tab-x1.png";
import cat_hero_tab_X2 from "/images/cat-hero-tab-x2.png";
import cat_hero_desk_X1 from "/images/cat-hero-desk-x1.png";
import cat_hero_desk_X2 from "/images/cat-hero-desk-x2.png";

export const IconCatHero = styled.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${cat_hero_X1}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${cat_hero_X2}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${cat_hero_tab_X1}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${cat_hero_tab_X2}) no-repeat center center;
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

        background: url(${cat_hero_desk_X1}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${cat_hero_desk_X2}) no-repeat center center;
            background-size: cover;
        }
    }
`;
