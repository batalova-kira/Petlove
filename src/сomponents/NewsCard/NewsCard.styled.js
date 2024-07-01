import styled from "styled-components";

export const WrapperNewsCard = styled.div`
    max-width: 335px;
    border: 1px solid red;

    @media only screen and (min-width: 768px) {
        max-width: 340px;
    }
`;

export const ThumbImgNews = styled.div`
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;

    @media only screen and (min-width: 768px) {
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

    @media only screen and (min-width: 768px) {
        height: 226px;
    }
`;

export const TitleNews = styled.h2`
    margin-bottom: 12px;

    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.black};

    @media only screen and (min-width: 768px) {
    }
`;

export const TextNews = styled.p`
    margin-bottom: 19px;

    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.black};

    @media only screen and (min-width: 768px) {
    }
`;

export const WrapperFooterNews = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* @media only screen and (min-width: 768px) {
    } */
`;

export const DataNews = styled.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.lightGrey};

    @media only screen and (min-width: 768px) {
    }
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

    /* @media only screen and (min-width: 768px) {
    } */
`;
