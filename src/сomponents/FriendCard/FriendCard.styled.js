import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints.js";

export const WrapperFriendCard = styled.li`
    position: relative;
    max-width: 335px;
    width: 100%;
    padding: 40px 20px;

    border-radius: 15px;
    background: ${(props) => props.theme.colors.secondBackground};

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`;

export const WrapperWorkHours = styled.div`
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 8px;

    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;

    border-radius: 30px;
    color: ${(props) => props.theme.colors.yellow};
    background: ${(props) => props.theme.colors.lightYellow};

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`;

export const WrapperFriendDescription = styled.div`
    display: flex;
    flex-direction: row;
    gap: 14px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`;

export const WrapperFriendAvatar = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-size: cover; /* Масштабує фон до розміру контейнера */
    background-position: center; /* Центрує зображення всередині контейнера */
    background-repeat: no-repeat;

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`;

export const FriendAvatar = styled.img`
    width: auto;
    height: 100%;
    object-fit: cover;
    display: block;

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`;

export const FriendTitle = styled.h3`
    margin-bottom: 14px;

    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.04em;
    color: ${(props) => props.theme.colors.black};

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`;

export const WrapperFriendText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`;

export const FriendText = styled.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.lightGrey};

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`;

export const FriendTextAccent = styled.span`
    color: ${(props) => props.theme.colors.black};
`;
