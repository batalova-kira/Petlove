import styled from "styled-components";
import shapeBcgr from "/shape_bcgr_mob1.png";
import shapeBcgrTab from "/shape_bcgr_tab1.png";

export const BackgroundHero = styled.div`
    /* width: 100%;
    height: 100%; */
    width: 335px;
    height: 280px;
    border-radius: 30px;

    position: relative;
    overflow: hidden;

    background: ${(props) => props.theme.colors.yellow};

    @media only screen and (min-width: 768px) {
        width: 704px;
        height: 302px;

        border-radius: 60px;
    }
`;

export const ShapeOverlay = styled.div`
    width: 305px;
    height: 280px;

    position: absolute;
    bottom: -20px;
    left: 27px;

    background: url(${shapeBcgr}) no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media only screen and (min-width: 768px) {
        width: 550px;
        height: 302px;

        position: absolute;
        bottom: -30px;
        left: 106px;

        background: url(${shapeBcgrTab}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`;

export const WrapperHeroIcon = styled.div`
    display: inline-block;
`;
