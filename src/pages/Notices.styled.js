import styled from "styled-components";
import { breakpoints } from "../constants/breakpoints.js";

export const NoticesList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 44px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        margin-bottom: 60px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 40px;
        column-gap: 32px;
    }
`;

export const NoticesFiltersWrapper = styled.div`
    max-width: 335px;
    margin-bottom: 40px;
    padding: 20px;
    border-radius: 30px;

    background: ${(props) => props.theme.colors.lightYellow};

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        margin-bottom: 60px; */
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        /* flex-direction: row;
        flex-wrap: wrap;
        row-gap: 40px;
        column-gap: 32px; */
    }
`;
