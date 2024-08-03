import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "../redux/notices/notices-operations";
import { FriendsTitle } from "./Friends.styled";
import {
    selectFilterWord,
    selectNotices,
    selectNoticesCurrentPage,
    selectNoticesHasMore,
    selectNoticesTotalPages,
    selectSearchCategory,
    selectSearchGender,
} from "../redux/notices/notices-selectors";
import { NoticesCard } from "../сomponents/NoticesCard/NoticesCard";
import { resetNotices } from "../redux/notices/noticesSlice";
import { Pagination } from "../сomponents/Pagination/Pagination";
import { NoticesList } from "./Notices.styled";
import { FiltersNotices } from "../сomponents/FiltersNotices/FiltersNotices";

const Notices = () => {
    const dispatch = useDispatch();
    const notices = useSelector(selectNotices);
    const currentPage = useSelector(selectNoticesCurrentPage);
    const hasMore = useSelector(selectNoticesHasMore);
    const totalPages = useSelector(selectNoticesTotalPages);
    const limit = 6;

    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    const selectedCategory = useSelector(selectSearchCategory);
    const selectedGender = useSelector(selectSearchGender);
    const filterWord = useSelector(selectFilterWord);

    useEffect(() => {
        dispatch(resetNotices());
        dispatch(
            fetchNotices({
                page: currentPageNumber,
                limit,
                category: selectedCategory,
                keyword: filterWord,
            })
        );
    }, [dispatch, currentPageNumber, limit, selectedCategory, filterWord]);

    const handleCurrentPage = (page) => {
        setCurrentPageNumber(page);
        dispatch(
            fetchNotices({
                page,
                limit,
                category: selectedCategory,
                keyword: filterWord,
            })
        );
    };

    const handleNextPage = () => {
        if (hasMore) {
            const nextPage = currentPageNumber + 1;
            setCurrentPageNumber(nextPage);
            dispatch(
                fetchNotices({
                    page: nextPage,
                    limit,
                    category: selectedCategory,
                    keyword: filterWord,
                })
            );
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            const prevPage = currentPageNumber - 1;
            setCurrentPageNumber(prevPage);
            dispatch(
                fetchNotices({
                    page: prevPage,
                    limit,
                    category: selectedCategory,
                    keyword: filterWord,
                })
            );
        }
    };

    const handleFirstPage = () => {
        setCurrentPageNumber(1);
        dispatch(
            fetchNotices({
                page: 1,
                limit,
                category: selectedCategory,
                keyword: filterWord,
            })
        );
    };

    const handleLastPage = () => {
        setCurrentPageNumber(totalPages);
        dispatch(
            fetchNotices({
                page: totalPages,
                limit,
                category: selectedCategory,
                keyword: filterWord,
            })
        );
    };

    const filteredNotices = notices.filter((notice) =>
        selectedGender ? notice.sex === selectedGender : true
    );

    return (
        <>
            <FriendsTitle>Find your favorite pet</FriendsTitle>
            <FiltersNotices />
            <NoticesList>
                {filteredNotices.map((item) => (
                    <NoticesCard key={item._id} noticesItem={item} />
                ))}
            </NoticesList>
            {filteredNotices.length > 0 && totalPages > 1 && (
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
            )}
        </>
    );
};

export default Notices;
