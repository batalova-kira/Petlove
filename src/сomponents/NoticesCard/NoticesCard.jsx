import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import {
    BtnNoticeFavorite,
    BtnNoticeLearnMore,
    CommentText,
    MetricAccentNotice,
    MetricNotice,
    MetricNoticeText,
    NoticeImg,
    PopularityNotice,
    Star,
    TitleNotice,
    WrapperBtnsNotice,
    WrapperHeaderNotice,
    WrapperMetricsNotice,
    WrapperNoticeCard,
    WrapperNoticeImg,
    WrapperReview,
} from "./NoticesCard.styled";
import {
    selectIsModalOpen,

} from "../../redux/modal/modal.selectors";
import { closeModal, openModal } from "../../redux/modal/modalSlice";
import { FindPetModal } from "../FindPetModal/FindPetModal";
import { fetchNoticeById } from "../../redux/notices/notices-operations";

export const NoticesCard = ({ noticesItem }) => {
    const {
        title,
        imgURL,
        popularity,
        _id,
        name,
        birthday,
        sex,
        species,
        category,
        comment,
    } = noticesItem;

    const dispatch = useDispatch();
    // const isModalOpen = useSelector(selectIsOpenModal);
    const isModalOpen = useSelector((state) => selectIsModalOpen(state, _id));

    const formBirthday = birthday ? birthday.replace(/-/g, ".") : "";

    // const handleLearnMoreClick = (_id) => {
    //     dispatch(openModal());
    //     dispatch(fetchNoticeById(_id));
    // };

    const handleLearnMoreClick = (_id) => {
        dispatch(openModal(_id)); // Відкрити модалку для конкретної картки
        dispatch(fetchNoticeById(_id)); // Завантажити дані для конкретної картки
    }; 

    // const handleCloseModal = () => {
    //     dispatch(closeModal());
    // };

    const handleCloseModal = (_id) => {
        dispatch(closeModal(_id)); // Закрити конкретну модалку картки
    };

    return (
        <WrapperNoticeCard key={_id}>
            <WrapperNoticeImg>
                <NoticeImg src={imgURL} alt={title} />
            </WrapperNoticeImg>
            <div>
                <WrapperHeaderNotice>
                    <TitleNotice>{title}</TitleNotice>
                    <WrapperReview>
                        <Star>
                            <Icon name="star" width={16} height={16} />
                        </Star>
                        <PopularityNotice>{popularity}</PopularityNotice>
                    </WrapperReview>
                </WrapperHeaderNotice>
                <WrapperMetricsNotice>
                    <MetricNotice>
                        <MetricNoticeText>Name</MetricNoticeText>
                        <MetricAccentNotice>{name}</MetricAccentNotice>
                    </MetricNotice>
                    <MetricNotice>
                        <MetricNoticeText>Birthday</MetricNoticeText>
                        <MetricAccentNotice>{formBirthday}</MetricAccentNotice>
                    </MetricNotice>
                    <MetricNotice>
                        <MetricNoticeText>Sex</MetricNoticeText>
                        <MetricAccentNotice>{sex}</MetricAccentNotice>
                    </MetricNotice>
                    <MetricNotice>
                        <MetricNoticeText>Species</MetricNoticeText>
                        <MetricAccentNotice>{species}</MetricAccentNotice>
                    </MetricNotice>
                    <MetricNotice>
                        <MetricNoticeText>Category</MetricNoticeText>
                        <MetricAccentNotice>{category}</MetricAccentNotice>
                    </MetricNotice>
                </WrapperMetricsNotice>
                <CommentText>{comment}</CommentText>
            </div>
            <WrapperBtnsNotice>
                <BtnNoticeLearnMore onClick={() => handleLearnMoreClick(_id)}>
                    Learn more
                </BtnNoticeLearnMore>
                <BtnNoticeFavorite>
                    <Icon name="favorite-heart" width={18} height={18} />
                </BtnNoticeFavorite>
            </WrapperBtnsNotice>
            {isModalOpen && (
                <FindPetModal
                    isOpen={isModalOpen}
                    onClose={() => handleCloseModal(_id)}
                    // modalData={noticesItem}
                    modalId={_id} 
                />
            )}
        </WrapperNoticeCard>
    );
};
