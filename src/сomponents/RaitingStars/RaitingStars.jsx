import Icon from "../Icon/Icon";
import { Star, StarContainer } from "./RaitingStars.styled";

export const RatingStars = ({ popularity }) => {
    const maxRating = 894;
    const totalStars = 5;

    const filledStars = Math.round((popularity / maxRating) * totalStars);
    const emptyStars = totalStars - filledStars;

    return (
        <StarContainer>
            {[...Array(filledStars)].map((_, index) => (
                <Star key={`filled-${index}`} $filled={true}>
                    <Icon name="star" width={16} height={16} />
                </Star>
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <Star key={`empty-${index}`} $filled={false}>
                    <Icon name="star" width={16} height={16} />
                </Star>
            ))}
        </StarContainer>
    );
};
