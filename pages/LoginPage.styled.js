import styled from "styled-components";
import dog_hero_X1 from "../public/images/dog_hero_mob_x1.png";
import dog_hero_X2 from "../public/images/dog_hero_mob_x2.png";

export const IconDogMobile = styled.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 1;

    @media (max-width: 767px) {
        background: url(${dog_hero_X1}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${dog_hero_X2}) no-repeat center center;
            background-size: cover;
        }
    }
`;
