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
    color: ${(props) =>
        props.theme.colors.yellow}; /* Колір заповнення та обведення */

    svg {
        fill: currentColor; /* Використовує колір з 'color' */
        stroke: currentColor; /* Використовує колір з 'color' */
    }

    margin-right: 4px;

    &:last-child {
        margin-right: 0;
    }
`;
