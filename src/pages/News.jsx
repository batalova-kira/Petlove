import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectNews,
    selectNewsCurrentPage,
    selectNewsHasMore,
    selectTotalPages,
} from "../redux/news/news-selectors";
import { fetchNews } from "../redux/news/news-operations";
import { resetNews, setFilterWord } from "../redux/news/newsSlice";

import {
    ContainerNewsCards,
    TitleNewsHeader,
    WrapperNewsHeader,
} from "./News.styled";
import { Pagination } from "../сomponents/Pagination/Pagination";
import { NewsCard } from "../сomponents/NewsCard/NewsCard";
import { Filter } from "../сomponents/Filter/Filter";

const News = () => {
    const dispatch = useDispatch();

    const news = useSelector(selectNews);
    const currentPage = useSelector(selectNewsCurrentPage);
    const hasMore = useSelector(selectNewsHasMore);
    const totalPages = useSelector(selectTotalPages);

    const limit = 6;

    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    useEffect(() => {
        dispatch(resetNews());
        dispatch(fetchNews({ page: 1, limit }));
    }, [dispatch, limit]);

    const handleCurrentPage = (page) => {
        setCurrentPageNumber(page);
        dispatch(fetchNews({ page, limit }));
    };

    const handleNextPage = () => {
        if (hasMore) {
            const nextPage = currentPageNumber + 1;
            setCurrentPageNumber(nextPage);
            dispatch(fetchNews({ page: nextPage, limit }));
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            const prevPage = currentPageNumber - 1;
            setCurrentPageNumber(prevPage);
            dispatch(fetchNews({ page: prevPage, limit }));
        }
    };

    const handleFirstPage = () => {
        setCurrentPageNumber(1);
        dispatch(fetchNews({ page: 1, limit }));
    };

    const handleLastPage = () => {
        setCurrentPageNumber(totalPages);
        dispatch(fetchNews({ page: totalPages, limit }));
    };

    const handleFilterSubmit = (filterWord) => {
        dispatch(setFilterWord(filterWord));
        setCurrentPageNumber(1);
        dispatch(fetchNews({ page: 1, limit, filterWord }));
    };

    return (
        <div>
            <WrapperNewsHeader>
                <TitleNewsHeader>News</TitleNewsHeader>
                <Filter onFilterSubmit={handleFilterSubmit} />
            </WrapperNewsHeader>
            <ContainerNewsCards>
                {news.map((item) => (
                    <NewsCard
                        key={item._id}
                        newsItem={item}
                        id={`news-${item._id}`}
                    />
                ))}
            </ContainerNewsCards>
            <Pagination
                currentPage={currentPage}
                handleCurrentPage={handleCurrentPage}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handleFirstPage={handleFirstPage}
                handleLastPage={handleLastPage}
                hasMore={hasMore}
                maxPages={totalPages}
            />
        </div>
    );
};

export default News;
