import styled from "styled-components";
import dog_avatar_x1 from "/images/🐶avatar_dog.png";
import dog_avatar_x2 from "/images/🐶avatar_dog_x2.png";

export const WrapperHeroCard = styled.div`
    display: none;

    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        gap: 8px;
        padding: 16px;

        position: absolute;
        bottom: 32px;
        left: 32px;

        width: 294px;
        height: 121px;
        border-radius: 20px;
        background: ${(props) => props.theme.colors.secondBackground};
    }
`;

export const WrapperHeroAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${(props) => props.theme.colors.lightYellow};
`;

export const HeroAvatar = styled.div`
    width: 32px;
    height: 32px;
    background: url(${dog_avatar_x1}) no-repeat center center;
    background-size: cover;
    z-index: 20;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background: url(${dog_avatar_x2}) no-repeat center center;
        background-size: cover;
        z-index: 20;
    }
`;

export const WrapperCardDesc = styled.div`
    
`;