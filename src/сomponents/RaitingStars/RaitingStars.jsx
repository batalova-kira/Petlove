import { useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import { Star, StarContainer } from "./RaitingStars.styled";

export const RatingStars = ({ popularity }) => {
    const maxRating = useSelector(state => state.notices.maxPopularity);
    const totalStars = 5;

    // Обчислюємо кількість заповнених зірок
    let filledStars = Math.round((popularity / maxRating) * totalStars);

    // Переконуємося, що значення знаходиться в межах від 0 до totalStars
    filledStars = Math.min(Math.max(filledStars, 0), totalStars);

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
