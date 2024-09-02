import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints.js";

export const stylesFindPet = {
    modalWidth: "335px",
    modalPadding: "40px 28px",
    mediumModalWidth: "473px",
    mediumModalPadding: "40px 71px"
};

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

    @media only screen and (min-width: ${breakpoints.medium}) {
        left: 165px;
        }
`;

export const FindPetTitle = styled.p`
    font-weight: 700;
    margin-bottom: 10px;

    font-size: 18px;
    line-height: 1.33;
    color: ${(props) => props.theme.colors.secondaryBlack};
`;

export const WrapperRating = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    margin-bottom: 20px;
`;

export const RatingNumber = styled.p`
    font-size: 14px;

    line-height: 1.43;
    color: ${(props) => props.theme.colors.secondaryBlack};
`;

export const ContainerPetInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 27px;
    margin-bottom: 18px;
`;

export const WrapperPetInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`;

export const PetInfoTitle = styled.p`
    font-size: 10px;

    line-height: 1.4;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.lightGrey};

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* width: 150px;
        height: 150px; */
    }
`;

export const PetInfoTitleDesc = styled.p`
    font-size: 12px;

    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.black};
`;

export const PetInfoText = styled.p`
    margin-bottom: 40px;
    font-size: 14px;

    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.secondaryBlack};
`;

export const WrapperBtnsPetFind = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const BtnAddTo = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 30px;
    border-radius: 30px;
    gap: 8px;

    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;

    color: ${(props) => props.theme.colors.secondBackground};
    background-color: ${(props) => props.theme.colors.yellow};

    svg {
        background-color: ${(props) => props.theme.colors.yellow};
        stroke: ${(props) => props.theme.colors.secondBackground};
        color: transparent;

        &:hover,
        &:focus {
            color: ${(props) => props.theme.colors.secondaryHoverYellow};
            stroke: ${(props) => props.theme.colors.secondBackground};
            background-color: ${(props) => props.theme.colors.secondaryHoverYellow};
        }
    }

    &:hover,
    &:focus {
        background-color: ${(props) => props.theme.colors.secondaryHoverYellow};
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        padding: 14px 43.5px;
    }
`;

export const BtnContact = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 36px;

    border-radius: 30px;
    gap: 8px;

    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.yellow};
    background-color: ${(props) => props.theme.colors.lightYellow};

    &:hover,
    &:focus {
        background-color: ${(props) => props.theme.colors.hoverYellow};
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        padding: 12px 50px;
    }
`;
