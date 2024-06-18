import React from "react";
import {
    CardBirth,
    CardBirthNumber,
    HeroAvatar,
    HeroCardTitle,
    WrapperCardBirth,
    WrapperHeroAvatar,
    WrapperHeroCard,
    WrapperHeroCardDesc,
    WrapperHeroCardText,
    WrapperHeroCardTitle,
} from "./HeroCard.styled";

// export const HeroCard = () => {
//     return (
//         <WrapperHeroCard>
//             <WrapperHeroAvatar>
//                 <HeroAvatar />
//             </WrapperHeroAvatar>
//             <WrapperHeroCardDesc>
//                 <WrapperHeroCardTitle>
//                     <HeroCardTitle>Rich</HeroCardTitle>
//                     <WrapperCardBirth>
//                         <CardBirth>Birthday: </CardBirth>
//                         <CardBirthNumber>21.09.2020</CardBirthNumber>
//                     </WrapperCardBirth>
//                 </WrapperHeroCardTitle>
//                 <WrapperHeroCardText>
//                     Rich would be the perfect addition to an active family that
//                     loves to play and go on walks. I bet he would love having a
//                     doggy playmate too!
//                 </WrapperHeroCardText>
//             </WrapperHeroCardDesc>
//         </WrapperHeroCard>
//     );
// };

export const HeroCard = ({
    avatarSrc,
    avatarSrc2x,
    title,
    birthDate,
    description,
}) => {
    return (
        <WrapperHeroCard>
            <WrapperHeroAvatar>
                <HeroAvatar
                    $avatarSrc={avatarSrc}
                    $avatarSrc2x={avatarSrc2x}
                    alt="Hero Avatar"
                />
            </WrapperHeroAvatar>
            <WrapperHeroCardDesc>
                <WrapperHeroCardTitle>
                    <HeroCardTitle>{title}</HeroCardTitle>
                    <WrapperCardBirth>
                        <CardBirth>Birthday: </CardBirth>
                        <CardBirthNumber>{birthDate}</CardBirthNumber>
                    </WrapperCardBirth>
                </WrapperHeroCardTitle>
                <WrapperHeroCardText>{description}</WrapperHeroCardText>
            </WrapperHeroCardDesc>
        </WrapperHeroCard>
    );
};
