import styled from "styled-components";
import { breakpoints } from "../constants/breakpoints.js";
import dog_hero_X1 from "/images/dog_hero_mob_x1.png";
import dog_hero_X2 from "/images/dog_hero_mob_x2.png";
import dog_hero_tabX1 from "/images/dog_hero_tabx1.png";
import dog_hero_tabX2 from "/images/dog_hero_tabx2.png";
import dog_hero_desk_X1 from "/images/dog_hero_desk_x1.png";
import dog_hero_desk_X2 from "/images/dog_hero_desk_x2.png";

export const StyledLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        gap: 16px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        display: flex;
        flex-direction: row;
        gap: 32px;
    }
`;

export const IconDogMobile = styled.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 101;

    @media (max-width: 767px) {
        background: url(${dog_hero_X1}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${dog_hero_X2}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${dog_hero_tabX1}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${dog_hero_tabX2}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        width: 512px;
        height: 660px;

        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);

        background: url(${dog_hero_desk_X1}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${dog_hero_desk_X2}) no-repeat center center;
            background-size: cover;
        }
    }
`;
