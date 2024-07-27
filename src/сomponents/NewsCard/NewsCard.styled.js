import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints.js";

export const WrapperNewsCard = styled.li`
    display: flex;
    flex-direction: column;
    max-width: 335px;
    width: 100%;
    height: 379px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        max-width: 340px;
        width: 340px;
        height: 476px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        max-width: 361px;
        width: 361px;
    }
`;

export const ThumbImgNews = styled.div`
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        margin-bottom: 28px;
    }
`;

export const ImgNews = styled.img`
    width: 100%;
    height: 190px;
    border-radius: 15px;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;

    @media only screen and (min-width: ${breakpoints.medium}) {
        height: 226px;
    }
`;

export const TitleNews = styled.h2`
    margin-bottom: 12px;
    --line-height: 1.25;
    max-height: calc(2 * var(--line-height) * 1em);
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: var(--line-height);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: calc(2 * var(--line-height) * 1em);

    font-weight: var(--font-weight-bold);
    font-size: 16px;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.black};

    &::after {
        content: "\00a0"; /* Додаємо пробіл */
        display: inline-block;
        width: 100%;
        height: 0;
        line-height: 0;
        visibility: hidden;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        font-size: 20px;
        --line-height: 1.3;
    }
`;

export const TextNews = styled.p`
    margin-bottom: 19px;
    --line-height: 1.29;
    max-height: calc(4 * var(--line-height) * 1em);
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: var(--line-height);
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    height: calc(4 * var(--line-height) * 1em);

    font-size: 14px;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.black};

    @media only screen and (min-width: ${breakpoints.medium}) {
        font-size: 16px;
        --line-height: 1.25;
    }
`;

export const Spacer = styled.div`
    flex: 1;
`;

export const WrapperFooterNews = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: ${breakpoints.medium}) {
        padding-bottom: 28px;
    }
`;

export const DataNews = styled.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.lightGrey};
`;

export const BtnReadMoreNews = styled.button`
    padding: 0;
    margin: 0;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${(props) => props.theme.colors.yellow};
    background: none;
`;
