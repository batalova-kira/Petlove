import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints.js";

export const WrapperNoticeCard = styled.li`
    display: flex;
    flex-direction: column;
    gap: 24px;

    width: 335px;
    padding: 24px;
    border-radius: 16px;

    background-color: ${(props) => props.theme.colors.secondBackground};

    @media only screen and (min-width: ${breakpoints.medium}) {
        width: 342px;
        height: 444px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        width: 362px;
    }
`;

export const WrapperNoticeImg = styled.div`
    width: 287px;
    height: 178px;
    border-radius: 16px;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;

    @media only screen and (min-width: ${breakpoints.medium}) {
        width: 294px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        width: 315px;
    }
`;

export const NoticeImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export const WrapperHeaderNotice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;

export const TitleNotice = styled.p`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    color: ${(props) => props.theme.colors.secondaryBlack};

    @media only screen and (min-width: ${breakpoints.medium}) {
        font-size: 18px;
        line-height: 1.33;
    }
`;

export const WrapperReview = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        gap: 2px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        gap: 4px;
    }
`;

export const Star = styled.div`
    display: flex;
    align-items: center;
    fill: ${(props) => props.theme.colors.yellow};
    stroke: ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.secondaryYellow};
`;

export const PopularityNotice = styled.span`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.secondaryBlack};

    @media only screen and (min-width: ${breakpoints.medium}) {
        line-height: 1.43;
    }
`;

export const WrapperMetricsNotice = styled.div`
    display: flex;
    flex-direction: row;
    gap: 14px;
    margin-bottom: 16px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        gap: 16px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        gap: 20px;
    }
`;

export const MetricNotice = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const MetricNoticeText = styled.p`
    font-size: 10px;
    line-height: 1.4;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.lightGrey};
`;

export const MetricAccentNotice = styled.span`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.black};
`;

export const CommentText = styled.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.secondaryBlack};
`;

export const WrapperBtnsNotice = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: auto;
`;

export const BtnNoticeLearnMore = styled.button`
    padding: 14px 80px;

    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;

    color: ${(props) => props.theme.colors.secondBackground};
    background-color: ${(props) => props.theme.colors.yellow};
    border: none;
    border-radius: 30px;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: ${(props) => props.theme.colors.secondaryHoverYellow};
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        padding: 14px 78px;

        font-size: 16px;
        line-height: 1.25;
        letter-spacing: -0.03em;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        padding: 14px 88px;
    }
`;

export const BtnNoticeFavorite = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 14px;

    color: ${(props) => props.theme.colors.yellow};
    background-color: ${(props) => props.theme.colors.lightYellow};
    border: none;
    border-radius: 30px;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: ${(props) => props.theme.colors.hoverYellow};
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        padding: 15px;
    }
`;
