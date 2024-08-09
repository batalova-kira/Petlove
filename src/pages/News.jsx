import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectFilteredNews,
    selectFilterWord,
    selectNews,
    selectNewsCurrentPage,
    selectTotalPages,
} from "../redux/news/news-selectors";
import { fetchNews } from "../redux/news/news-operations";
import {
    resetNews,
    setCurrentPage,
    setFilterWord,
} from "../redux/news/newsSlice";

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
    const filteredNews = useSelector(selectFilteredNews);
    const filterWord = useSelector(selectFilterWord);
    const currentPage = useSelector(selectNewsCurrentPage);
    const totalPages = useSelector(selectTotalPages);
    const limit = 6;

    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    useEffect(() => {
        dispatch(resetNews());
        dispatch(fetchNews({ page: 1, limit, keyword: filterWord }));
    }, [dispatch, limit, filterWord]);

    useEffect(() => {
        setCurrentPageNumber(currentPage);
    }, [currentPage]);

    const handleCurrentPage = (page) => {
        setCurrentPageNumber(page);
        dispatch(setCurrentPage(page));
        dispatch(fetchNews({ page, limit, keyword: filterWord }));
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            const nextPage = currentPageNumber + 1;
            setCurrentPageNumber(nextPage);
            dispatch(setCurrentPage(nextPage));
            dispatch(fetchNews({ page: nextPage, limit, keyword: filterWord }));
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            const prevPage = currentPageNumber - 1;
            setCurrentPageNumber(prevPage);
            dispatch(setCurrentPage(prevPage));
            dispatch(fetchNews({ page: prevPage, limit, keyword: filterWord }));
        }
    };

    const handleFirstPage = () => {
        setCurrentPageNumber(1);
        dispatch(setCurrentPage(1));
        dispatch(fetchNews({ page: 1, limit, keyword: filterWord }));
    };

    const handleLastPage = () => {
        setCurrentPageNumber(totalPages);
        dispatch(setCurrentPage(totalPages));
        dispatch(fetchNews({ page: totalPages, limit, keyword: filterWord }));
    };

    const handleFilterSubmit = (filterWord) => {
        dispatch(setFilterWord(filterWord));
        dispatch(fetchNews({ page: 1, limit, keyword: filterWord }));
    };

    const newsToDisplay = filterWord ? filteredNews : news;

    return (
        <div>
            <WrapperNewsHeader>
                <TitleNewsHeader>News</TitleNewsHeader>
                <Filter onFilterSubmit={handleFilterSubmit} />
            </WrapperNewsHeader>
            <ContainerNewsCards>
                {newsToDisplay && newsToDisplay.length > 0 ? (
                    newsToDisplay.map((item) => (
                        <NewsCard
                            key={item._id}
                            newsItem={item}
                            id={`news-${item._id}`}
                        />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </ContainerNewsCards>
            {currentPage < totalPages && (
                <Pagination
                    currentPage={currentPageNumber}
                    handleCurrentPage={handleCurrentPage}
                    handleNextPage={handleNextPage}
                    handlePrevPage={handlePrevPage}
                    handleFirstPage={handleFirstPage}
                    handleLastPage={handleLastPage}
                    hasMore={currentPage < totalPages}
                    maxPages={totalPages}
                />
            )}
        </div>
    );
};

export default News;
