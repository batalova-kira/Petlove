import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";
import add_pet_mob_x1 from "/images/add_pet_mob_x1.png";
import add_pet_mob_x2 from "/images/add_pet_mob_x2.png";
import add_pet_tab_x1 from "/images/add_pet_tab_x1.png";
import add_pet_tab_x2 from "/images/add_pet_tab_x2.png";
import add_pet_desk_x1 from "/images/add_pet_desk_x1.png";
import add_pet_desk_x2 from "/images/add_pet_desk_x2.png";

export const DogAddPet = styled.div`
    width: 297px;
    height: 248px;

    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);

    background-size: contain;
    z-index: 101;

    @media (max-width: 767px) {
        background: url(${add_pet_mob_x1}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${add_pet_mob_x2}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);

        background: url(${add_pet_tab_x1}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${add_pet_tab_x2}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        width: 512px;
        height: 648px;

        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);

        background: url(${add_pet_desk_x1}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${add_pet_desk_x2}) no-repeat center center;
            background-size: cover;
        }
    }
`;
