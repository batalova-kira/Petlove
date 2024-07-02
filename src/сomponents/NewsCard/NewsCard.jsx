import React from "react";
import {
    BtnReadMoreNews,
    DataNews,
    ImgNews,
    Spacer,
    TextNews,
    ThumbImgNews,
    TitleNews,
    WrapperFooterNews,
    WrapperNewsCard,
} from "./NewsCard.styled";

export const NewsCard = ({ newsItem }) => {
    const { title, text, date, imgUrl } = newsItem;
    const data = date.slice(0, 10).replace(/-/g, "/");

    return (
        <WrapperNewsCard key={newsItem._id}>
            <ThumbImgNews>
                <ImgNews src={imgUrl} alt="Image of news" />
            </ThumbImgNews>
            <TitleNews>{title}</TitleNews>
            <TextNews>{text}</TextNews>
            <Spacer />
            <WrapperFooterNews>
                <DataNews>{data}</DataNews>
                <BtnReadMoreNews>Read more</BtnReadMoreNews>
            </WrapperFooterNews>
        </WrapperNewsCard>
    );
};
