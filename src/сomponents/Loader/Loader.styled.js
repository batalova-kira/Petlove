import styled from "styled-components";
import tabX1 from "/petlove/images/loader_tab_x1.jpg";
import tabX2 from "/petlove/images/loader_tab_x2.jpg";
import mobX1 from "/petlove/images/loader_mob_x1.jpg";
import mobX2 from "/petlove/images/loader_mob_x2.jpg";
import deskX1 from "/petlove/images/loader_desk_x1.jpg";
import deskX2 from "/petlove/images/loader_desk_x2.jpg";

export const Preloader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    // Дефолтне зображення
    /* background: url(${tabX1}) no-repeat center center,
        ${(props) => props.theme.colors.backgroundBlur}; */
    background-size: cover;

    // Mobile
    @media (max-width: 767px) {
        background: url(${mobX1}) no-repeat center center,
            ${(props) => props.theme.colors.backgroundBlur};
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${mobX2}) no-repeat center center,
                ${(props) => props.theme.colors.backgroundBlur};
            background-size: cover;
        }
    }

    // Tablets
    @media (min-width: 768px) and (max-width: 1279px) {
        background: url(${tabX1}) no-repeat center center,
            ${(props) => props.theme.colors.backgroundBlur};
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${tabX2}) no-repeat center center,
                ${(props) => props.theme.colors.backgroundBlur};
            background-size: cover;
        }
    }

    // Desktop
    @media (min-width: 1280px) {
        background: url(${deskX1}) no-repeat center center,
            ${(props) => props.theme.colors.backgroundBlur};
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${deskX2}) no-repeat center center,
                ${(props) => props.theme.colors.backgroundBlur};
            background-size: cover;
        }
    }
`;

export const PreloaderInner = styled.div`
    position: relative;
    text-align: center;
`;

export const SpinningContainer = styled.div`
    width: 292px;
    height: 292px;
    animation: spin 2s linear infinite;

    @media only screen and (min-width: 768px) {
        width: 427px;
        height: 427px;
    }

    @media only screen and (min-width: 1280px) {
        width: 396px;
        height: 396px;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    svg {
        width: 100%;
        height: 100%;
    }
`;

export const LoaderPercentage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-weight: 700;
    font-size: 50px;
    line-height: 100%;
    letter-spacing: -0.04em;
    color: ${(props) => props.theme.colors.secondBackground};
    z-index: 1;

    @media only screen and (min-width: 768px) {
        font-size: 80px;
    }
`;
