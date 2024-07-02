import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectNews,
    selectNewsCurrentPage,
    selectNewsHasMore,
} from "../redux/news/news-selectors";
import { fetchNews } from "../redux/news/news-operations";
import { resetNews } from "../redux/news/newsSlice";

import { ContainerNewsCards } from "./News.styled";
import { Pagination } from "../сomponents/Pagination/Pagination";
import { NewsCard } from "../сomponents/NewsCard/NewsCard";

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
            <Pagination
                currentPage={currentPage}
                hasMore={hasMore}
                handleCurrentPage={handleCurrentPage}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
            />
        </div>
    );
};

export default News;
