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
    selectIsOpenModal,
    selectModalData,
} from "../../redux/modal/modal.selectors";
import { closeModal, openModal } from "../../redux/modal/modalSlice";
import { FindPetModal } from "../FindPetModal/FindPetModal";

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
    const isModalOpen = useSelector(selectIsOpenModal);
    const modalData = useSelector(selectModalData);

    const formBirthday = birthday ? birthday.replace(/-/g, ".") : "";

    const handleLearnMoreClick = () => {
        dispatch(openModal(noticesItem));
    };

    const handleCloseModal = () => {
        dispatch(closeModal());
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
                <BtnNoticeLearnMore onClick={handleLearnMoreClick}>
                    Learn more
                </BtnNoticeLearnMore>
                <BtnNoticeFavorite>
                    <Icon name="favorite-heart" width={18} height={18} />
                </BtnNoticeFavorite>
            </WrapperBtnsNotice>
            {isModalOpen && (
                <FindPetModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    modalData={modalData}
                />
            )}
        </WrapperNoticeCard>
    );
};
