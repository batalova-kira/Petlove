import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints.js";

export const StyledTitle = styled.h1`
    margin-bottom: 12px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 100%;
    letter-spacing: -0.04em;
    color: ${(props) => props.color || props.theme.colors.black};

    @media only screen and (min-width: ${breakpoints.medium}) {
        margin-bottom: 16px;

        font-size: 54px;
    }
`;
