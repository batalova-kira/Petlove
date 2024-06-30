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

const News = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(6);
    const news = useSelector(selectNews);
    const currentPage = useSelector(selectNewsCurrentPage);
    const hasMore = useSelector(selectNewsHasMore);

    useEffect(() => {
        dispatch(resetNews()); // Скидання стану новин
        dispatch(fetchNews({ page: 1, limit })); // Завантаження першої сторінки з поточним лімітом
    }, [dispatch, limit]);

    useEffect(() => {
        // Встановити ліміт при завантаженні сторінки
        updateLimit();

        // Додати слухач на зміну розміру вікна
        window.addEventListener("resize", updateLimit);

        return () => {
            // Видалити слухач при розмонтуванні компоненту
            window.removeEventListener("resize", updateLimit);
        };
    }, []);

    const updateLimit = () => {
        const width = window.innerWidth;
        if (width >= 768 && width < 1280) {
            setLimit(8); // для Tablet
        } else {
            setLimit(6); // Для mobile, desktop
        }
    };

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
            <ul>
                {news.map((item) => (
                    <NewsCard key={item._id} newsItem={item} />
                ))}
            </ul>
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
