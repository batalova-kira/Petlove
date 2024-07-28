import Icon from "../Icon/Icon";
import {
    NoticeImg,
    PopularityNotice,
    Star,
    TitleNotice,
    WrapperHeaderNotice,
    WrapperNoticeCard,
    WrapperNoticeImg,
    WrapperReview,
} from "./NoticesCard.styled";

export const NoticesCard = ({ noticesItem }) => {
    const { title, imgURL, popularity, _id } = noticesItem;

    return (
        <WrapperNoticeCard key={_id}>
            <WrapperNoticeImg>
                <NoticeImg src={imgURL} alt={title} />
            </WrapperNoticeImg>

            <WrapperHeaderNotice>
                <TitleNotice>{title}</TitleNotice>
                <WrapperReview>
                    <Star>
                        <Icon name="star" width={16} height={16} />
                    </Star>
                    <PopularityNotice>{popularity}</PopularityNotice>
                </WrapperReview>
            </WrapperHeaderNotice>
        </WrapperNoticeCard>
    );
};
