import styled from "styled-components";
import shapeBcgr from "/shape_bcgr_mob1.png";

export const BackgroundHero = styled.div`
    width: 100%;
    height: 100%;
    width: 335px;
    height: 280px;
    border-radius: 30px;

    position: relative;
    overflow: hidden;

    background: ${(props) => props.theme.colors.yellow};
`;

export const ShapeOverlay = styled.div`
    width: 332px;
    height: 414px;
    width: 100%;
    height: 100%;

    position: absolute;
    top: 22px;
    left: 13px;

    background: url(${shapeBcgr}) no-repeat center center;
    background-size: contain;
    z-index: 1;
`;
