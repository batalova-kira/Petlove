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
    const { title, text, date, imgUrl, url } = newsItem;
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
                <BtnReadMoreNews
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read more
                </BtnReadMoreNews>
            </WrapperFooterNews>
        </WrapperNewsCard>
    );
};
