import React from "react";
import {
    BtnReadMoreNews,
    DataNews,
    ImgNews,
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
        <li key={newsItem._id}>
            <WrapperNewsCard>
                <ThumbImgNews>
                    <ImgNews src={imgUrl} alt="Image of news" />
                </ThumbImgNews>
                <TitleNews>{title}</TitleNews>
                <TextNews>{text}</TextNews>
                <WrapperFooterNews>
                    <DataNews>{data}</DataNews>
                    <BtnReadMoreNews>Read more</BtnReadMoreNews>
                </WrapperFooterNews>
            </WrapperNewsCard>
        </li>
    );
};
