import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints.js";

export const SortOptionBtn = styled.label`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    padding: 12px;
    border-radius: 30px;
    border: "none";

    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;

    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.secondBackground};
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background: ${(props) => props.theme.colors.yellow};
        color: ${(props) => props.theme.colors.secondBackground};
    }

    .radio-input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* .radio-input + .span {
        color: #007bff; 
    } */

    @media only screen and (min-width: ${breakpoints.medium}) {
        padding: 14px;

        font-size: 16px;
        line-height: 1.25;
    }
`;

export const SortOptionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        gap: 8px;
    }
`;
