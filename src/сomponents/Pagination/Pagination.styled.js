import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints.js";

export const ContainerPagination = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 11px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        gap: 24px;
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        gap: 8px;
    }
`;

export const BtnSlider = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.veryLightGrey};
    background-color: transparent;
    color: ${(props) => props.theme.colors.black};

    &:focus,
    &:hover {
        border-color: transparent;
        color: ${(props) => props.theme.colors.secondBackground};
        background-color: ${(props) => props.theme.colors.yellow};
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;

    svg {
        margin-left: -14px;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        svg {
            margin-left: -17px;
        }
    }

    svg:first-child {
        margin-left: 0;
    }
`;

export const BtnsWrapper = styled.div`
    display: flex;
    gap: 6px;
    justify-content: center;

    &:focus,
    &:hover {
        border-color: transparent;
        stroke: ${(props) => props.theme.colors.secondBackground};
        color: transparent;
    }

    svg {
        width: 20px;
        height: 20px;
        viewport-fit: 20 20 0 0;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        svg {
            width: 24px;
            height: 24px;
        }
    }
`;
