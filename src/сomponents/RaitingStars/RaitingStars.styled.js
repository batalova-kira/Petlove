import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints.js";

export const StarContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Star = styled.span`
    font-size: 24px;
    color: ${(props) =>
        props.$filled
            ? props.theme.colors.yellow
            : props.theme.colors.backgroundStarGrey};
    fill: ${(props) =>
        props.$filled
            ? props.theme.colors.yellow
            : props.theme.colors.backgroundStarGrey};
    stroke: ${(props) =>
        props.$filled
            ? props.theme.colors.yellow
            : props.theme.colors.backgroundStarGrey};
    margin-right: 4px;
    &:last-child {
        margin-right: 0;
    }
`;
