import styled from "styled-components";

export const HomePageContainer = styled.div`
    padding: 50px 20px;
    padding-top: 118px;
    margin-top: -70px;
    border-radius: 30px;
    width: 100%;
    background: ${(props) => props.theme.colors.yellow};

    @media only screen and (min-width: 768px) {
        /* padding: 71px 140px;

        width: 704px; */
    }
`;

export const HomePageTitle = styled.h2`
    margin-bottom: 24px;

    font-weight: var(--font-weight-bold);
    font-size: 50px;
    line-height: 0.96;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.secondBackground};

    @media only screen and (min-width: 768px) {
        /* padding: 71px 140px;

        width: 704px; */
    }
`;

export const HomePageTitleAccent = styled.span`
    color: ${(props) => props.theme.colors.accentWhite};

    @media only screen and (min-width: 768px) {
        /* padding: 71px 140px;

        width: 704px; */
    }
`;

export const HomePageTitleText = styled.p`
    font-weight: var(--font-weight-medium);
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;

    @media only screen and (min-width: 768px) {
        /* padding: 71px 140px;

        width: 704px; */
    }
`;
