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

export const WrapperHeroCardDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 194px;
`;

export const WrapperHeroCardTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeroCardTitle = styled.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.yellow};
`;

export const WrapperCardBirth = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`;

export const CardBirth = styled.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.lightGrey};
`;

export const CardBirthNumber = styled.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.black};
`;

export const WrapperHeroCardText = styled.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.mediumGrey};
`;
