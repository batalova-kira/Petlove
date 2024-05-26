import styled from "styled-components";
// import shapeBcgr from "/shape_bcgr_mob1.png";
import shapeBcgr2 from "/shape_bcgr_mob2.png";

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
    width: 316px;
    height: 390px;

    position: absolute;
    top: -35px;
    left: 20px;

    background: url(${shapeBcgr2}) no-repeat center center;
    background-size: contain;
    z-index: 1;
`;

export const WrapperHeroIcon = styled.div`
    display: inline-block;

    position: absolute;

    z-index: 2;
`;
