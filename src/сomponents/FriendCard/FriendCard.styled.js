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
        max-width: 342px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        max-width: 370px;
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
        font-size: 14px;
        line-height: 1.29;
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
        gap: 16px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        gap: 20px;
    }
`;

export const WrapperFriendAvatar = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media only screen and (min-width: ${breakpoints.medium}) {
        width: 90px;
        height: 90px;
    }
`;

export const FriendAvatar = styled.img`
    width: auto;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export const ContainerFriendText = styled.div`
    max-width: 185px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        max-width: 196px;
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
        margin-bottom: 20px;

        font-size: 20px;
        line-height: 1.3;
    }
`;

export const WrapperFriendText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const FriendText = styled.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.lightGrey};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const FriendTextAccent = styled.span`
    color: ${(props) => props.theme.colors.black};
`;
