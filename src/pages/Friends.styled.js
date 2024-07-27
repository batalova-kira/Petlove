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

export const FriendsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* flex-direction: row;
        flex-wrap: wrap;
        row-gap: 32px;
        column-gap: 24px;
        margin-bottom: 60px; */
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        /* flex-direction: row;
        flex-wrap: wrap;
        row-gap: 40px;
        column-gap: 34px; */
    }
`;
