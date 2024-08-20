import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints.js";

export const WrapperFindPetImg = styled.div`
    position: relative;
    margin-bottom: 16px;

    border-radius: 100px;
    width: 120px;
    height: 120px;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;

    @media only screen and (min-width: ${breakpoints.medium}) {
        width: 150px;
        height: 150px;
    }
`;

export const FindPetImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export const FindPetCategory = styled.div`
    position: absolute;
    top: 40px;
    left: 110px;

    padding: 8px 14px;
    border-radius: 30px;

    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.yellow};
    background: ${(props) => props.theme.colors.lightYellow};

    &::first-letter {
        text-transform: uppercase;
    }
`;

export const FindPetTitle = styled.p`
    font-weight: 700;
    margin-bottom: 10px;

    font-size: 18px;
    line-height: 1.33;
    color: ${(props) => props.theme.colors.secondaryBlack};
`;
