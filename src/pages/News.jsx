import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectNews,
    selectNewsCurrentPage,
    selectNewsHasMore,
} from "../redux/news/news-selectors";
import { fetchNews } from "../redux/news/news-operations";
import { resetNews } from "../redux/news/newsSlice";
import { NewsCard } from "../сomponents/NewsCard/NewsCard";
import { ContainerNewsCards } from "./News.styled";

const News = () => {
    const dispatch = useDispatch();

    const news = useSelector(selectNews);
    const currentPage = useSelector(selectNewsCurrentPage);
    const hasMore = useSelector(selectNewsHasMore);

    useEffect(() => {
        dispatch(resetNews()); // Скидання стану новин
        dispatch(fetchNews({ page: 1, limit: 6 })); // Завантаження першої сторінки з поточним лімітом
    }, [dispatch]);

    const handleCurrentPage = (page) => {
        dispatch(fetchNews({ page, limit: 6 }));
    };

    const handleNextPage = () => {
        if (hasMore) {
            dispatch(fetchNews({ page: currentPage + 1, limit: 6 }));
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            dispatch(fetchNews({ page: currentPage - 1, limit: 6 }));
        }
    };

    return (
        <div>
            <ContainerNewsCards>
                {news.map((item) => (
                    <NewsCard key={item._id} newsItem={item} />
                ))}
            </ContainerNewsCards>
            <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Prev
                </button>
                {/* Створення кнопок для сторінок */}
                {currentPage > 1 && (
                    <button onClick={() => handleCurrentPage(currentPage - 1)}>
                        {currentPage - 1}
                    </button>
                )}
                <button disabled>{currentPage}</button>
                {currentPage < 192 && (
                    <>
                        <button
                            onClick={() => handleCurrentPage(currentPage + 1)}
                        >
                            {currentPage + 1}
                        </button>
                        <button disabled>...</button>
                    </>
                )}
                <button onClick={handleNextPage} disabled={!hasMore}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default News;
