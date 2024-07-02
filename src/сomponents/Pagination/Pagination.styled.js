import styled from "styled-components";
import Icon from "../Icon/Icon";

export const ContainerPagination = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 11px;

    @media only screen and (min-width: 768px) {
        gap: 24px;
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;

    @media only screen and (min-width: 768px) {
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

export const ArrowIcon = styled(Icon)`
    stroke: ${(props) => props.theme.colors.black};
`;
