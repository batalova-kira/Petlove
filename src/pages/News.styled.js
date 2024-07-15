import styled from "styled-components";

export const WrapperNewsHeader = styled.div`
    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 44px;
    }

    @media only screen and (min-width: 1280px) {
        margin-bottom: 60px;
    }
`;

export const TitleNewsHeader = styled.h1`
    margin-bottom: 20px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.black};

    @media only screen and (min-width: 768px) {
        margin-bottom: 0;
    }
`;

export const ContainerNewsCards = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 44px;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 32px;
        column-gap: 24px;
        margin-bottom: 60px;
    }

    @media only screen and (min-width: 1280px) {
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 40px;
        column-gap: 34px;
    }
`;
