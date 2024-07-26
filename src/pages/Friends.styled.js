import styled from "styled-components";
import { HomePageTitle } from "./HomePage.styled";
import { breakpoints } from "../constants/breakpoints.js";

export const FriendsTitle = styled(HomePageTitle)`
    margin-bottom: 40px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.black};

    @media only screen and (min-width: ${breakpoints.medium}) {
        margin-bottom: 44px;

        font-size: 54px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        margin-bottom: 60px;

        /* font-size: 90px; */
    }
`;
